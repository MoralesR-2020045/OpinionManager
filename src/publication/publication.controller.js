import Publication from "./publication.model.js";

export const addPublication = async (req, res) => {
    try{
        const { _id } = req.usuario;
        const data = req.body;
        let publicationPicture = req.file ? req.file.filename : null;
        data.publicationPicture = publicationPicture;
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