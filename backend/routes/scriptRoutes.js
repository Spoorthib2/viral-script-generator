const express = require("express");
const { generateScript } = require("../services/geminiService");

const router = express.Router();

router.post("/generate-script", async (req, res) => {
  try {
    const { topic, audience, platform, length } = req.body;

    const script = await generateScript(
      topic,
      audience,
      platform,
      length
    );

    res.json({
      success: true,
      script,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate script",
    });
  }
});

module.exports = router;