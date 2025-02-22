import { Router } from "express";
import { addCategory, deleteCategory, updateCategory } from "./category.controller.js";
import { validationAddCategory, validatorUpdateCategory, validatorDeleteCategory} from "../middleware/category-validator.js";

const router = Router()

router.post("/addCategory",validationAddCategory, addCategory);
router.put("/updateCategory/:uid",validatorUpdateCategory, updateCategory);
router.delete("/deleteCategory/:uid", validatorDeleteCategory, deleteCategory)

export default router