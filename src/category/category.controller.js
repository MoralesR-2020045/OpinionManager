import Category from "./category.models.js";

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