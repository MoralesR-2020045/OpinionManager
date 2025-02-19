import User from "../user/user.models.js"
import {hash, verify} from "argon2"

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