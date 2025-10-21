import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, lastName, email, phone, topic, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, lastName, email, phone, topic, message });
    await newContact.save();

    console.log("New contact saved:", newContact);

    // Send success response
    res.status(200).json({
      success: true,
      message: "Message received successfully!",
      redirectURL: "https://www.venussofttech.com/",
    });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

export default router;

