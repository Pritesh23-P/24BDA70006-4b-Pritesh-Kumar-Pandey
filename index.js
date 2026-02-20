import express from "express";
import cors from "cors";
import cardRoutes from "./routes/cardRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/cards", cardRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Playing Card Collection API Running" });
});

// 👇 This makes it work locally but not interfere with Vercel
if (process.env.NODE_ENV !== "production") {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;