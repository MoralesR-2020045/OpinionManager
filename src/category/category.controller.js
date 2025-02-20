import Category from "./category.models.js";

export const addCategory = async (req, res) =>{
    try{
        const data = req.body 
        const category = await Category.create(data);
        return res.status(200).json({
            message: "The new category has been added",
            nameCategory: category.name
        })
    }catch(err){
        return res.status(500).json({
            message: "Error add category",
            error: err.message
        })

    }
}