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

export const deleteComment = async (req, res) => {
    try{
        const { uid } = req.params
        await Comment.findByIdAndUpdate(uid, {status: false}, {new: true})
        
        return res.status(200).json({
            success: true,
            message: "Delete Comment",
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error delete Comment",
            error: err.message
        })
    }
}

export const getComment = async (req, res) => {
    try{
        const { limite = 10, desde = 0 } = req.query

        const query = {status: true}

        const [total, comment ] = await Promise.all([
            Comment.countDocuments(query),
            Comment.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        return res.status(200).json({
            success: true,
            total,
            comment
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error getting list of comment",
            error: error.message
        })
    }
}