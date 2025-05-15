const { sign } = require("jsonwebtoken");
const User = require("../models/user");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const jsCookie = require("js-cookie");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendJWTToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: "Strict",
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);

  // => Set Token in headers
  // res.setHeader("Authorization", `Bearer ${token}`);

  // console.log("headers: ", res.headers);
  // remove password from output
  user.password = undefined;
  res.status(200).json({
    status: "Success",
    token,
    message: "You have logged in successfully!",
    data: {
      user,
    },
  });
};

exports.register = async (req, res, next) => {
  const { username, password, email, confirmPassword } = req.body;
  console.log("req.body : ", req.body);
  if (!username || !password || !email || !confirmPassword) {
    res.status(400).json({
      status: "fail",
      message: "Missing required fields.",
    });
  }
  const users = await User.find({
    $or: [{ username: username }, { email: email }],
  });
  if (users.length !== 0) {
    return res.status(400).json({
      status: "fail",
      message: "This email or username is used before!",
      data: { users },
    });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({
      status: "fail",
      message: "Passwords are not the same(Password, Confirm Password)!",
    });
  }
  const newUser = await User.create(req.body);
  await newUser.save();
  res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: { newUser },
  });
};

exports.login = catchAsync(async (req, res, next) => {
  // console.log("req.body from client: ", req.headers.authorization);
  const { email, password } = req.body;

  if (!password || !email) {
    return res.status(400).json({
      message: "Please provide username and password",
    });
    return next(new AppError("Please provide username and password", 400));
  }
  //  check if username is exist and password is correct.
  const user = await User.findOne({ email }).select("+password");
  if (user === null) {
    return next(new AppError("This user is not exist!", 401));
    // res.status(401).json({
    //   status: "fail",
    //   message: ,
    // });
  }
  console.log("user : ", user);
  const correct = await user.correctPassword(password, user.password);
  if (!correct) {
    return next(new AppError("Incorrect Password, Please Try Again", 401));
    // res.status(401).json({
    //   status: "fail",
    //   message: "Incorrect Password, Please Try Again",
    // });
  }
  createSendJWTToken(user, 200, res);
});
exports.protect = catchAsync(async (req, res, next) => {
  console.log("token from cookie: ", req.cookies.jwt);
  // console.log("")
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) token = req.cookies.jwt;

  if (!token) {
    return next(
      new AppError("Your are not logged in! Please login to get access", 401)
    );
  }
  // 2) Verification token

  // The jwt.verify function is originally a callback-based function (not async), which means it takes a callback to handle the response.
  // By using promisify, you convert jwt.verify to a promise-based function, which lets you use async/await with it.

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // console.log(decode);
  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no logger exist.",
        401
      )
    );
  }
  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
});

// Why return (req, res, next) => { ... }:

// When restrictTo is called, it takes in specific roles (such as ['admin', 'user']),
// and then returns a middleware function: (req, res, next) => { ... }.
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do have permission to perform this action"),
        403
      );
    }
    next();
  };
};
