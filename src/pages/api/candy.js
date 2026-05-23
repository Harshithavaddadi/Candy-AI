export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        reply: "Invalid messages format. Expected array of message objects.",
      });
    }

    const apiKey =
      process.env.GROQ_API_KEY ||
      process.env.NEXU_API_KEY ||
      process.env.API_KEY;
    const apiUrl =
      process.env.API_URL ||
      "https://api.groq.com/openai/v1/chat/completions";
    const model = process.env.GROQ_MODEL || "llama-3.1-8b-instant";

    if (!apiKey) {
      console.error("Missing AI API key. Set GROQ_API_KEY in .env.local.");
      return res.status(200).json({
        reply:
          "AI setup is missing. Create a .env.local file in the project root and add GROQ_API_KEY=your_groq_api_key, then restart the dev server.",
      });
    }

    console.log("Sending request to AI provider with messages:", messages.length);

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI provider error:", response.status, errorText);

      if (response.status === 401) {
        return res.status(200).json({
          reply:
            "Invalid API key. Please check your GROQ_API_KEY in .env.local and restart the dev server.",
        });
      }

      if (response.status === 429) {
        return res.status(200).json({
          reply: "Rate limit exceeded. Please try again later.",
        });
      }

      return res.status(200).json({
        reply: `The AI provider returned an error (${response.status}). Please try again.`,
      });
    }

    const data = await response.json();
    console.log("AI provider response received");

    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      console.warn("No valid reply from AI provider:", data);
      return res.status(200).json({
        reply: "The AI model returned an empty response. Please try again.",
      });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(200).json({
      reply:
        "Sorry, I encountered an error while processing your request. Please try again.",
    });
  }
}
