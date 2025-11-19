import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import chatRoutes from "./routes/chat.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", chatRoutes);

app.post("/asdf", (req, res) => {
  console.log(req.body);
  res.send("pqrs");
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  connectDB();
});

// MongoDB Connection
const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is missing in .env");
    }

    await mongoose.connect(uri);
    console.log("Connected with Database!");
  } catch (err) {
    console.error("Failed to connect with DB:", err);
  }
};

