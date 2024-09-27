import bcrypt from  "bcrypt";
import jwt from "jsonwebtoken"
import "../models/User.js"
import User from "../models/User.js";


export const register = async (req, res) => {
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        

        const newUser = new User({
            firstName,
            lastName,
            email,
            password : passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 1000),
            impressions: Math.floor(Math.random() * 1000)
        })
        const saveduser = await newUser.save();
        res.status(201).json(saveduser);
    } catch( err){


    }
}