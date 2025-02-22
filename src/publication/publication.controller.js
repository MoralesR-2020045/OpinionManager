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


export const deletePublication = async (req, res) => {
    try{
        const { uid } = req.params
        await Publication.findByIdAndUpdate(uid, {status: false}, {new: true})
        
        return res.status(200).json({
            success: true,
            message: "Delete Publication",
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error delete category",
            error: err.message
        })
    }
}

export const getPublication = async (req, res) => {
    try{
        const { limite = 10, desde = 0 } = req.query

        const query = {}

        const [total, publications ] = await Promise.all([
            Publication.countDocuments(query),
            Publication.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        return res.status(200).json({
            success: true,
            total,
            publications
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error getting list of categories",
            error: error.message
        })
    }
}