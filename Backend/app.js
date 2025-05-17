require("dotenv").config("./config.env");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const rateLimiter = require("express-rate-limit");
const bodyParser = require("body-parser");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
// const handlerErrorsAuto = require("./controllers/errorController");
const helmet = require("helmet");
const cors = require("cors");

//
const app = express();

// **Global MIDDLEWARES

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Authorization", "Content-Type", "token", "role"],
  })
);
// // Set security http headers
// app.use(helmet());
// // body parser, reading data from body into req.body
// app.use(bodyParser.json({ limit: "10kb" }));

// // **This limiter allows customers to send a maximum of 100 HTTP requests within the specified time window (windowMs).
// const limiter = rateLimiter({
//   max: 10,
//   windowMs: 1 * 60 * 1000,
//   message: "Too Many Requests from this IP, please try again in an hour",
// });
// To parse request
app.use(express.json());
// app.use("/api", limiter);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
// app.use(handlerErrorsAu  to);
module.exports = app;
