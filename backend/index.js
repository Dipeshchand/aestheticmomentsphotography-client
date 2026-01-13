import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import albumRoutes from "./routes/album.js";
import uploadRoutes from "./routes/upload.js";

// import Gallery from "./page/Gallery";
// import Album from "./page/Album";

dotenv.config({ quiet: true });

const app = express();
app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    app.use("/albums", albumRoutes);
    app.use("/upload", uploadRoutes);

    app.listen(5000, () => {
      console.log("Backend running on port 5000");
    });
  } catch (err) {
    console.error("Server failed:", err);
  }
}

startServer();
