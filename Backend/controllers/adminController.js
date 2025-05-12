const Event = require("../models/event");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.createEvent = catchAsync(async (req, res, next) => {
  const { name, description, venue, price, category, image } = req.body;
  if (!name || !description || !venue || !price || !category || !image)
    return next(new AppError("Missing Required Field!", 401));

  const event = await Event.create(req.body);

  //   return event with successful message
  res.status(200).json({
    status: "success",
    message: "Event created successfully!",
    event,
  });
});
exports.getEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findById(req.params.eventId);

  if (!event) return next(new AppError("Event does not exist!", 404));

  res.status(200).json({
    status: "success",
    data: { event },
  });
});

exports.updateEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findByIdAndUpdate(req.params.eventId, req.body, {
    runValidators: true,
    new: true,
  });

  if (!event) {
    return next(new AppError("Event does not exist!", 404));
  }

  res.status(200).json({
    status: "success",
    message: "Event updated successfully!",
    event,
  });
});

exports.deleteEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findById(req.params.eventId);

  if (!event) return next(new AppError("Event does not exist!", 404));

  await event.deleteOne();
  res.json({
    status: "success",
    message: "Event deleted Successfully!",
  });
});
