import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/groq", async (req, res) => {
  try {
    const { messages } = req.body;
    const apiKey = process.env.NEXU_API_KEY;

    if (!apiKey) {
      console.error("❌ Missing GROQ_API_KEY");
      return res.status(500).json({ reply: "Missing API key." });
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Groq API error:", response.status, errorText);
      return res.status(response.status).json({ reply: "Groq API error." });
    }

    const data = await response.json();
    console.log("✅ Groq response:", data);

    const reply = data.choices?.[0]?.message?.content;
    if (!reply) {
      console.warn("⚠️ No valid reply from Groq:", data);
      return res.json({ reply: "Model returned empty response." });
    }

    return res.json({ reply });
  } catch (err) {
    console.error("🔥 Server error:", err);
    return res.status(500).json({ reply: "Internal server error." });
  }
});

export default router;
