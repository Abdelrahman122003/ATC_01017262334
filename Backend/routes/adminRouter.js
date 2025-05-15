const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/getAllEvents", adminController.getAllEvents);
router.post("/createEvent", adminController.createEvent);

router.get("/getEvent/:eventId", adminController.getEvent);
router.patch("/updateEvent/:eventId", adminController.updateEvent);
router.delete("/deleteEvent/:eventId", adminController.deleteEvent);
module.exports = router;
