import Publication from "./publication.model.js";

export const addPublication = async (req, res) => {
    try{
        const { _id } = req.usuario;
        const data = req.body;
        data.userpublication = _id;

        const publication = await Publication.create(data);

        return res.status(201).json({
            message: "You have succesfully publication",
            title: publication.publicationtitle, 
            content: publication.content,
            picture: publication.publicationPicture
        });
    }catch(err){
        return res.status(500).json({
            message: "User registration failed",
            error: err.message
        });
    }
}

export const updatePublication = async (req, res) =>{
    try{
        const {uid} = req.params
        const {publicationtitle, content, category } = req.body
        if(!category){
            await Publication.findByIdAndUpdate(uid, { publicationtitle, content}, {new:true});
            return res.status(200).json({
                message: "It has been successfully updated"
            })
        }
        console.log(uid)
        if(category){
            await Publication.findByIdAndUpdate(uid, { publicationtitle, content, category},{new:true})
            return res.status(200).json({
                message: "It has been successfully updated dea"
            })
        }
    }catch(err){
        return res.status(500).json({
            message: "User update failed",
            error: err.message
        })
    }
}