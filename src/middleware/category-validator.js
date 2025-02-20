import { body } from "express-validator";
import { bodyValidator } from "./document-validator.js";
import { validateJWT } from "./validate-jwt.js";
import { nameCategoryExists } from "../helpers/db-validators.js";
import { hasRoles } from "./validate-admin.js";



export const validationAddCategory =[
    validateJWT,
    hasRoles("true"),
    body("name").notEmpty().withMessage("Name is required"),
    body("name").custom(nameCategoryExists),
    body("description").notEmpty().withMessage("Description is required"),
    bodyValidator
]