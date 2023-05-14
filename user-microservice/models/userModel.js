const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name cannot be blank"],
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "email cannot be blank"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "You must use a vaild email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password cannot be blank"],
    minlength: 8,
  },
});

module.exports = mongoose.model("User", UserSchema);
