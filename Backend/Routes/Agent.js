const express = require('express');
const router = express.Router();
const Agent = require('../model/Agent');

router.post('/agents', async (req, res) => {
  try {
    const { name, description } = req.body;

    // Validation
    if (!name || name.length < 3 || name.length > 100) {
      return res.status(400).json({
        error: "Name is required (3–100 characters)"
      });
    }

    // Prevent duplicate agents (optional but good)
    const existing = await Agent.findOne({ name });
    if (existing) {
      return res.status(409).json({
        error: "Agent with this name already exists"
      });
    }

    const agent = await Agent.create({ name, description });

    res.status(201).json(agent);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;