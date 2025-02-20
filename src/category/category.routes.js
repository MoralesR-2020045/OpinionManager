import { Router } from "express";
import { addCategory } from "./category.controller.js";
import { validationAddCategory } from "../middleware/category-validator.js";

const router = Router()

router.post("/addCategory",validationAddCategory, addCategory);

export default router