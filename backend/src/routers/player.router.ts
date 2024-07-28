import { Router } from "express";
import { sample_players } from "../data";
import expressAsyncHandler from "express-async-handler";
import { PlayerModel } from "../models/player.model";

const router = Router();

router.get("/seed", expressAsyncHandler(
  async (req, res) => {
    const playerCount = await PlayerModel.countDocuments();
    if(playerCount > 0) {
      res.send("Seed is already done!")
      return;
    }
    await PlayerModel.create(sample_players);
    res.send("Seed is done!");
  }
))

router.get("/",  expressAsyncHandler(
  async (req, res) => {
    const squad = await PlayerModel.find();
    res.send(squad);
  }
))
router.get("/:playerId", expressAsyncHandler(
  async (req, res) => {
    const squad = await PlayerModel.findById(req.params.playerId);
    res.send(squad);
  }
)
  )

export default router;