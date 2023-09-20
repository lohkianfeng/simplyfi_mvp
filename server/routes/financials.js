const express = require("express");
const Financial = require("../models/financialModel");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

// POST a new workout
router.post("/", async (req, res) => {
  const { name, income, expenses, assets, liabilities } = req.body;
  try {
    const financial = await Financial.create({
      name,
      income,
      expenses,
      assets,
      liabilities,
    });
    res.status(200).json(financial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
