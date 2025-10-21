// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import contactRoutes from "./routes/contact.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());
// app.use("/api/contact", contactRoutes);

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("MongoDB connected");
//     app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
//   })
//   .catch(err => console.error("MongoDB connection error:", err));
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

//Log Mongo connection string (for debugging)
const MONGO_URL = process.env.MONGO_URL;
console.log("Loaded MONGO_URL:", MONGO_URL);

if (!MONGO_URL) {
  console.error("MONGO_URL not found in .env file!");
  process.exit(1);
}

const app = express();

//Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow your React frontend
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//MongoDB connection
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

//Routes
app.use("/api/contact", contactRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
