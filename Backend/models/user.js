const crypto = require("crypto");
const mongoose = require("mongoose");
// validator
const validator = require("validator");

const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please tell us your name!"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    // During selection for users, exclude password
    select: false,
  },
  role: {
    type: String,
    required: true,
    enum: ["User", "Admin"],
    default: "User",
  },
  confirmPassword: {
    type: String,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
});
userSchema.pre(
  "save",
  async function (next) {
    // this function works if password is changed.
    if (!this.isModified("password")) return next();

    // ** during register
    // encrypt the password
    this.password = await bcrypt.hash(this.password, 12);
    // delete confirm password
    this.confirmPassword = undefined;
    next();
  },
  { timestamps: true }
);

// customerSchema.pre(/^find/, function (next) {
//   // this method to get all customer that his pro active equal to false

//   this.find({ active: { $ne: false } });
//   next();
// });

// this method to compare password that not encrypted with password stored(encrypted)
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// customerSchema.methods.createPasswordResetToken = function () {
//   const resetToken = crypto.randomBytes(32).toString("hex");
//   this.passwordResetToken = crypto
//     .createHash("sha256")
//     .update(resetToken)
//     .digest("hex");
//   // console.log("resetToken : ", resetToken);
//   // console.log(resetToken + "   " + this.passwordResetToken);
//   this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

//   return resetToken;
// };
const user = mongoose.model("User", userSchema);

// export this object
module.exports = user;
