import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to Database!");
});

const app = express();
app.use(express.json());

// Configure CORS to allow only http://localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173", // Only allow this origin
  })
);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
