const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20, "User's name length cannot exceed 20 letters!"],
    minlength: [2, "User's name length should be atleast 2 letters!"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be 8 characters long!"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  age: {
    type: String,
  },
  //   role: {
  //     type: String,
  //     enum: ["user", "doc"],
  //     default: "user",
  //   },
  height: {
    type: Number,
  },
  passwordChangedAt: {
    type: Date,
  },
  passwordResetToken: { type: String },
  passwordResetExpires: { type: Date },
  active: {
    default: true,
    type: Boolean,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.correctPassword = async function (current, candidate) {
  return await bcrypt.compare(current, candidate); 
};

const User = mongoose.model("User", userSchema);
module.exports = User;
