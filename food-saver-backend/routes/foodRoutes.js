const express = require('express');
const router = express.Router();
const Food = require('../models/foodModel');
const upload = require('../middleware/upload');
const { sendAppreciationMail } = require('../utils/mailer');
// POST with photo upload
router.post('/', upload.single('photo'), async (req, res) => {
  try {
    const newFood = new Food({
      ...req.body,
      photo: req.file ? `/uploads/${req.file.filename}` : ''
    });
    await newFood.save();

    // ✅ Send appreciation mail
    if (req.body.email) {
      sendAppreciationMail(req.body.email, req.body.name, req.body.foodType, req.body.quantity);
    }
    res.status(201).json(newFood);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all food items
router.get('/', async (req, res) => {
  try {
    const foodList = await Food.find().sort({ submittedAt: -1 });
    res.json(foodList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
