import { Router } from "express";
import { sample_players } from "../data";
import expressAsyncHandler from "express-async-handler";
import { SquadModel } from "../models/player.model";

const router = Router();

router.get("/seed", expressAsyncHandler(
  async (req, res) => {
    const squadCount = await SquadModel.countDocuments();
    if(squadCount > 0) {
      res.send("Seed is already done!")
      return;
    }
    await SquadModel.create({userId: '66b25a0dd75a10b04aec65f9', squad: sample_players});
    res.send("Seed is done!");
  }
))

router.get("/:userId",  expressAsyncHandler(
  async (req, res) => {
    const squad = await SquadModel.find({userId: req.params.userId});
    res.send(squad);
  }
))
router.get("/:userId/:playerId", expressAsyncHandler(
  async (req, res) => {
    const squad = await SquadModel.find({userId: req.params.userId});
    const player = squad[0].squad.filter(player => player.id === req.params.playerId)
    res.send(player);
  }
)
  )

export default router;