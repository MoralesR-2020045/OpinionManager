import Publication from "./publication.model.js";

export const addPublication = async (req, res) => {
    try{
        const data = req.body;
        let profilePicture = req.file ? req.file.filename : null;
        data.profilePicture = profilePicture;

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