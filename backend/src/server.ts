import express from "express";
import cors from "cors"; // TODO: Onlt for develpoment
import { sample_players, sample_users } from "./data";
import jwt from 'jsonwebtoken';
import { isAccessor } from "typescript";

const app = express();
app.use(express.json());
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

app.post("/api/users/login", (req, res) => {
  const {email, password} = req.body; //Destructuring assignment
  const user = sample_users.find(user => user.email === email && user.password === password);
  if(user){
    res.send(generateTokenResponse(user));
  }
  else {
    res.status(400).send("Username or password is not valid!");
  }
})


const generateTokenResponse = (user:any)=>{
  const token = jwt.sign({
    email:user.email, isAdmin:user.isAdmin}, "SomeRandomText", {expiresIn:"30d"});

    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, () => {
  console.log("Website server on http://localhost:" + port)
});