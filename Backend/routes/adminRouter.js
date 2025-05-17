const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authController = require("../controllers/authController");

router.get(
  "/getAllEvents",
  authController.protect,
  authController.restrictTo("Admin"),
  adminController.getAllEvents
);
router.post(
  "/createEvent",
  authController.protect,
  authController.restrictTo("Admin"),
  adminController.createEvent
);

router.get(
  "/getEvent/:eventId",
  authController.protect,
  authController.restrictTo("Admin"),
  adminController.getEvent
);
router.patch(
  "/updateEvent/:eventId",
  authController.protect,
  authController.restrictTo("Admin"),
  adminController.updateEvent
);
router.delete(
  "/deleteEvent/:eventId",
  authController.protect,
  authController.restrictTo("Admin"),
  adminController.deleteEvent
);
module.exports = router;
