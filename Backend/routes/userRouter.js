const express = require("express");
const router = express.Router();
// const controller = require("../controllers/userController");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

// auth => protect to check use session is expired or no
// router.use(authController.protect);
//
router.post("/bookEvent", userController.bookEvent);
router.get("/getAllEvents/:userId", userController.getAllEvents);

module.exports = router;
