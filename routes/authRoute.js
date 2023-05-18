const { Router } = require("express");
const { register, login, updateProfile, deleteProfile } = require('../controller/authController');
const isAuthenticated = require("../middleware/isAuthenticated");

const authRoute = Router();

authRoute.post('/register', register)

authRoute.get('/login', login)

authRoute.patch('/update', isAuthenticated, updateProfile)

authRoute.delete('/delete', isAuthenticated, deleteProfile)


module.exports = authRoute