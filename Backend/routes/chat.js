import express from "express";
import getGeminiResponse from "../utils/gemini.js";

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    // console.log(req.body);
    // const message = "What is 2 + 2"
    console.log("inside")
    const reply = await getGeminiResponse(message);
    res.json({ reply });

  } catch (error) {
    console.log("Chat API Error:", error);
    res.status(500).json({ error: "Failed to get response from Gemini" });
  }
});

router.get("/testing", (req, res) => {
    console.log("inside testing");
    res.send("inside the testing")
})

export default router;
