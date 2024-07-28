import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors"; // TODO: Onlt for develpoment
import playerRouter from './routers/player.router';
import userRouter from './routers/user.router';
import {dbConnect} from './configs/database.config';

dbConnect();
const app = express();
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}));

app.use("/api/squad", playerRouter) 
app.use("/api/users", userRouter) 

const port = 5000;
app.listen(port, () => {
  console.log("Website server on http://localhost:" + port)
});