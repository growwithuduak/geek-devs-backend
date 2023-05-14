const User = require("../models/userModel.js");

const createUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("there was an error: user not created");
  }
};

getUserById = async (req, res) => {
  try {
    const { userID } = req.params;
    const user = await User.findById(userID);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("error retrieving user");
  }
};

updateUserById = async (req, res) => {
  try {
    const { userID } = req.params;
    const updateUser = await User.findByIdAndUpdate(
      userID,
      { ...req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("error updating  user");
  }
};

deleteUserById = async (req, res) => {
  try {
    const { userID } = req.params;
    await User.findByIdAndDelete(userID);
    res.status(204).send("user deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("error: user was not deleted");
  }
};
module.exports = {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
