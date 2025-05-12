const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Username is required"],
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Event Id is required"],
  },
});

const booking = mongoose.model("bookingDB", bookingSchema);
module.exports = booking;
