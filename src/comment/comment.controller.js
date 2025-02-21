import Comment from "./comment.model.js";

export const addComment = async (req, res) =>{
    try{
        const { _id } = req.usuario;
        const data = req.body;
        data.usercomment = _id;
    
        const comment = await Comment.create(data);
        console.log(comment)
        return res.status(201).json({
            message: "You have succesfully publication",
        
            usercomment: comment.usercomment, 
        });
    }catch(err){
        return res.status(500).json({
            message: "User registration failed",
            error: err.message
        });
    }
}
