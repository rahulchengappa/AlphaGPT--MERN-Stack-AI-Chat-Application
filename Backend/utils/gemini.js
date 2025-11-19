import dotenv from "dotenv";
dotenv.config();

export default async function getGeminiResponse(message) {
    try {
        console.log("Incoming Message:", message);

        const apiKey = process.env.OPENROUTER_API_KEY;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:5173",
                "X-Title": "SigmaGPT"
            },
            body: JSON.stringify({
                model: "openai/gpt-5.1-codex-mini",
                messages: [{ role: "user", content: message }],
              "max_tokens": 2000
            }),
        });

        const data = await response.json();
        console.log("OpenRouter response:", data);

        if (data?.choices?.[0]?.message?.content) {
            return data.choices[0].message.content;
        }

        return "Sorry, I couldn't process your request.";
    } catch (err) {
        console.error("Gemini API Error:", err);
        return "Sorry, I couldn't process your request.";
    }
}



