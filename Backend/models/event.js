const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    category: {
      type: String,
      enum: ["Music", "Business", "Tech", "Sport", "Art", "Other"],
      tags: [String],
      required: [true, "Category is required"],
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    venue: {
      type: String,
      required: [true, "Venue is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
  },
  { timestamps: true }
);

const event = mongoose.model("Event", eventSchema);

module.exports = event;
