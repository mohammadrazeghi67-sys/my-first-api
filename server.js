import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ok: true, msg: "API is running" });
});

app.get("/time", (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.post("/echo", (req, res) => {
  res.json({ youSent: req.body });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

