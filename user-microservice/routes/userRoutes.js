const express = require("express");
const router = express.Router();
const userController = require("../controller/userController.js");

router.post("/createUser", userController.createUser);
router.get("/:userID", userController.getUserById);
router.put("/:userID", userController.updateUserById);
router.delete("/:userID", userController.deleteUserById);

module.exports = router;
