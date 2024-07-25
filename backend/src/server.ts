import express from "express";
import cors from "cors"; // TODO: Onlt for develpoment
import { sample_players } from "./data";

const app = express();
app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}));

app.get("/api/squad", (req, res) => {
  res.send(sample_players);
})
app.get("/api/squad/:playerId", (req, res) => {
  const playerId = req.params.playerId;
  const player = sample_players.find(player => player.id == playerId);
  res.send(player);
})

const port = 5000;
app.listen(port, () => {
  console.log("Website server on http://localhost:" + port)
});