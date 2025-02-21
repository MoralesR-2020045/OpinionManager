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
        const data = req.body;
        const user = await Comment.findOne({usercomment: _id});

        if(user){
            await Comment.findByIdAndUpdate(uid, data, { new: true });
        }

        return res.status(200).json({
            msg: 'The category has been edited correctly',
            name: category.name,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Error update category",
            error: err.message
        })
    }
}