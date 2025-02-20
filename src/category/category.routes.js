import { Router } from "express";
import { addCategory, updateCategory } from "./category.controller.js";
import { validationAddCategory, validatorUpdateCategory } from "../middleware/category-validator.js";

const router = Router()

router.post("/addCategory",validationAddCategory, addCategory);
router.put("/updateCategory/:uid",validatorUpdateCategory, updateCategory);

export default router