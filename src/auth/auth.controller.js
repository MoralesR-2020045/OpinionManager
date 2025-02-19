import User from "../user/user.models.js"
import {hash, verify} from "argon2"
import { generateJWT } from "../helpers/generate-jwt.js";

export const register = async (req, res) => {
    try{
        const data = req.body;
        let profilePicture = req.file ? req.file.filename : null;
        const encryptPassword = await hash(data.password);
        data.password = encryptPassword;
        data.profilePicture = profilePicture;

        const user = await User.create(data);
        return res.status(201).json({
            message: "You have succesfully registered",
            name: user.name, 
            email: user.email,
        });
    }catch(err){
        return res.status(500).json({
            message: "User registration failed",
            error: err.message
        });
    }
}


export const login = async (req, res) => {
    try{
        const {username, email, password} =req.body
        const user = await User.findOne({
            $or:[{username: username}, {email: email}]
        })

        if(!user){
            return res.status(400).json({
                message: "Invalidated credentials",
                error:"The username or email entered does not exist"
            })
        }

        const validPassword = await verify(user.password, password)

        if(!validPassword){
            return res.status(400).json({
                message: "Invalidated credentials",
                error: "incorrect password"
            })
        }

        const token = await generateJWT(user.id)

        return res.status(200).json({
            message: "Login successful",
            userDetails: {
                name: user.name,
                usernmae: user.username,
                token: token,
            }
        })

    }catch(err){
        return res.status(500).json({
            message: "error when logging in",
            error: err.message
        })
    }
}