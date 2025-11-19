// list-models.js
import dotenv from "dotenv";
dotenv.config();

async function listModels() {
  const apiKey = process.env.GEMINI_API_KEY;

  const res = await fetch("https://openrouter.ai/api/v1/models", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${apiKey}`
    }
  });

  const data = await res.json();
  console.log("Available models:", data);
}

listModels().catch(err => console.error("List Models Error:", err));

