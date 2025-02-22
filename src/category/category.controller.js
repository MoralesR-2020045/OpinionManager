import Category from "./category.models.js";
import Publication from "../publication/publication.model.js";


export const defaultCategory = async () =>{
    try{    
        const categoryExists = await Category.findOne({name: "General"});

        if(!categoryExists){
            await Category.create({
                name: "General",
                description: "Categoria general donde se alamacenan publicaciones de categoria general",
            })
        }
    }catch(err){
        console.error("Error creating administrador");
        console.log(err);
    }
}

export const addCategory = async (req, res) => {
    try {
        const data = req.body
        const category = await Category.create(data);
        return res.status(200).json({
            message: "The new category has been added",
            nameCategory: category.name
        })
    } catch (err) {
        return res.status(500).json({
            message: "Error add category",
            error: err.message
        })
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { uid } = req.params;
        const data = req.body
        const category = await Category.findByIdAndUpdate(uid, data, { new: true });
        
        return res.status(200).json({
            message: 'The category has been edited correctly',
            name: category.name,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Error update category",
            error: err.message
        })
    }
}

export const deleteCategory = async (req, res) => {
    try{
        const { uid } = req.params
        const uidDefault = await Category.findOne({name: "General"})
        await Category.findByIdAndUpdate(uid, {status: false}, {new: true})
        await Publication.updateMany(
            { category: uid }, 
            { $set: { category: uidDefault._id } } 
        );
        return res.status(200).json({
            success: true,
            message: "Curso eliminado",
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error delete category",
            error: err.message
        })
    }
}

export const getCategory = async (req, res) => {
    try{
        const { limite = 10, desde = 0 } = req.query

        const query = {}

        const [total, categorys ] = await Promise.all([
            Category.countDocuments(query),
            Category.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        return res.status(200).json({
            success: true,
            total,
            categorys
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error getting list of categories",
            error: error.message
        })
    }
}

