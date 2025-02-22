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

export const updateComment = async (req, res) => {
    try {
        const {_id} = req.usuario;
        const { uid } = req.params;
        const {comment} = req.body;
        const objectComment = await Comment.findById({_id: uid});

        if(_id.equals(objectComment.usercomment)){
            const update = await Comment.findByIdAndUpdate(uid, { comment:comment }, { new: true });
            
            return res.status(200).json({
                message: "Was updated",
                update
            });
        }

    } catch (err) {
        return res.status(500).json({
            message: "Error update comment",
            error: err.message
        })
    }
}