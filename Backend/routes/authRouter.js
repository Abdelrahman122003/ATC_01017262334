const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// >>> For everyone
// signUp

router.post("/register", authController.register);
// login
router.post("/login", authController.login);

// >>> For All users that is loggedIn
// Protect all routes after this middleware
router.use(authController.protect);

// router.use(authController.restrictTo("admin"));

module.exports = router;

// pm.environment.set("jwt", pm.response.json().token)
