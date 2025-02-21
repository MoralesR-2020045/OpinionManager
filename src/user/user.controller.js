import User from "./user.models.js";
import {hash, verify} from "argon2"

export const updateUser = async(req, res)=>{
    try{
        const {username, passwordOld, passwordNew} = req.body;
        const { _id } = req.usuario;
        const user = await User.findById(_id);

        if(passwordOld){
            const validPassword = await verify(user.password, passwordOld)
            if (!validPassword){
                return res.status(400).json({
                    message: "Passwords do not match",
                    error: "The old password is not correct"
                })
            }  
            const encryptPassword = await hash(passwordNew);
            await User.findByIdAndUpdate(_id, {username: username, password: encryptPassword}, {new:true});
            return res.status(200).json({
                message: "successful update"
            })
        }

        if(username){
            const update = await User.findByIdAndUpdate(_id, {username: username}, {new:true});
            return res.status(200).json({
                message: "successful update"
            })
        }

        res.status(400).json({
            message: "No parameters were sent"
        })
        
    }catch(err){
        return res.status(500).json({
            message: "error updating",
            error: err.message
        })
    }
}