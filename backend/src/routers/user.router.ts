import { Router } from "express";
import { sample_users} from "../data";
import jwt from 'jsonwebtoken';
import expressAsyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs';
import { User, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import { SquadModel } from "../models/player.model";

const router = Router();

router.get("/seed", expressAsyncHandler(
  async (req, res) => {
    const userCount = await UserModel.countDocuments();
    if(userCount > 0) {
      res.send("Seed is already done!")
      return;
    }
    await UserModel.create(sample_users);
    res.send("Seed is done!");
  }
))

router.post("/login", expressAsyncHandler(
  async (req, res) => {
    const {email, password} = req.body; //Destructuring assignment
  
    const user = await UserModel.findOne({email});
    if(user){
      const isMatch = bcrypt.compareSync(password, user.password);
        if (isMatch) {
          res.send(generateTokenResponse(user));
            // Proceed with sign-in process
        } else {
          res.status(HTTP_BAD_REQUEST).send("Username or password is not valid!");
        }
    }else {
      res.status(HTTP_BAD_REQUEST).send("Username or password is not valid!");
    }
  }
))

router.post('/register', expressAsyncHandler(
  async (req, res) => {
    const {name, email, password} = req.body;
    const user = await UserModel.findOne({email});
    if(user){
      res.status(HTTP_BAD_REQUEST).send("User is already exist, please login!");
      return;
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser:User = {
      id:'',
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      isAdmin: false
    }
    const dbUser = await UserModel.create(newUser);
    await SquadModel.create({userId: dbUser.id, squad: []});
    res.send(generateTokenResponse(dbUser));
  }
))

const generateTokenResponse = (user:any)=>{
  const token = jwt.sign({
    email:user.email, isAdmin:user.isAdmin}, "SomeRandomText", {expiresIn:"30d"});

    user.token = token;
    return user;
}

export default router;
