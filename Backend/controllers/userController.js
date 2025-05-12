const Event = require("../models/event");
const Booking = require("../models/booking");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const event = require("../models/event");

exports.bookEvent = catchAsync(async (req, res, next) => {
  const { userId, eventId } = req.body;

  const bookedEvent = await Booking.create({ user: userId, event: eventId });

  res.status(200).json({
    status: "success",
    message: "The Event booked successfully!",
    Booking: bookedEvent,
  });
});
exports.getAllEvents = catchAsync(async (req, res, next) => {
  // Get all record that is contain specific userId
  const userBookings = await Booking.find({ user: req.params.userId });

  // Then put them in set structure
  const bookingEventIds = new Set(userBookings.map((b) => b.event.toString()));

  //   Get all events
  const events = await Event.find();
  // Then iterate on all event and make flag -> booked or book now
  const eventsWithStatus = events.map((event) => {
    const eventObj = event.toObject();
    const status = bookingEventIds.has(eventObj._id.toString())
      ? "booked"
      : "book now";
    return { ...eventObj, status };
  });

  res.status(200).json({
    status: "success",
    results: events.length,
    events: eventsWithStatus,
  });
});
