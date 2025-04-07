import express from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";
import cors from "cors";


dotenv.config();
dotenv.config();

console.log("Cloudinary Environment Variables:");
console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_KEY_SECRET ? "Loaded" : "Missing");

// const app = express();


const PORT = process.env.PORT || 5001;

app.use(cookieParser());
app.use(express.json()); //It helps to parse the incoming request with JSON payloads
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}
  
));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


server.listen(PORT, () => {
  console.log("Server is running on port :- " + PORT);
  connectDB();
});