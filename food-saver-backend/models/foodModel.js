const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },                        // Optional if not present in all forms
  phone: { type: String },
  foodType: { type: String },
  quantity: { type: String, required: true },
  bestBy: { type: Date },
  dietary: [{ type: String }],
  date: { type: Date },                           // Preferred date of donation
  timeSlot: { type: String },
  instructions: { type: String },
  location: { type: String },
  expiryTime: { type: Date },
  photo: { type: String },                        // e.g., '/uploads/photo.jpg'
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Food', foodSchema);
