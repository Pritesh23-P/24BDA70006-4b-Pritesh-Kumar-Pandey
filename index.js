import express from "express";
import cors from "cors";
import cardRoutes from "./routes/cardRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Use Routes
app.use("/cards", cardRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({ message: "Playing Card Collection API Running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});