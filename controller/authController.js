const User = require('../model/userModel')
const bcrypt = require('bcrypt')
const asyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken')

const { publishMessage } = require('../utils/producer')
const exchange = 'userExchange'


//@desc register user
//@route POST /auth/register
//@access Public
exports.register = asyncHandler(async (req, res) => {
    const { firstname, lastname, username, email, password } = req.body

    //check user's input
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("Important ceredentials missing")
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        firstname,
        lastname,
        username,
        email,
        password: hashedPassword
    })

    // Publish user data to RabbitMQ
    const message = JSON.stringify({ user });
    await publishMessage(exchange, message);

    res.status(200).json({
        status: "success",
        message: 'User created successfully',
        data: user
    })
})


//@desc login user
//@route GET /users/register
//@access Public
exports.login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // check user input 
    if (!email || !password) {
        res.status(400)
        throw new Error("Enter all credentials!")
    }

    const user = await User.findOne({ email })
    if (!user) {
        res.status(400)
        throw new Error("User not found")
    }

    //compare user'password with hashed password in db
    if (user && (await bcrypt.compare(password, user.password))) {


        const message = JSON.stringify({ user });
        await publishMessage(exchange, message);

        res.status(200).json({
            status: "success",
            message: {
                _id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
                token: generateToken(user._id)
            }

        })
    } else {
        res.status(400)
        throw new Error("Wrong password")
    }

})



//@desc update user' profile
//@route PATCH /users/update
//@access Private
exports.updateProfile = asyncHandler(async (req, res) => {
    const dataToUpdate = req.body

    //check if req.user is still in db
    if (!req.user) {
        res.status(404).json({
            status: "failed",
            message: "User not found"
        })
    } else {
        //update user' data
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            dataToUpdate,
            { new: true })

        // Publish updated user' data to RabbitMQ
        const message = JSON.stringify({ updatedUser });
        await publishMessage('userExchange', message);

        res.status(200).json({
            status: "success",
            data: updatedUser
        })
    }
})


//@desc delete user' profile
//@route DELETE /users/delete
//@access Private
exports.deleteProfile = asyncHandler(async (req, res) => {
    if (!req.user) {
        res.status(404)
        throw new Error("user not found")
    }

    await User.findByIdAndRemove(req.user.id)

    res.status(204).json({
        status: 'success',
        message: "User successfully deleted"
    })
})


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}