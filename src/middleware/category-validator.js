import { body, param } from "express-validator";
import { bodyValidator } from "./document-validator.js";
import { validateJWT } from "./validate-jwt.js";
import { categoryExist, nameCategoryExists } from "../helpers/db-validators.js";
import { hasRoles } from "./validate-admin.js";



export const validationAddCategory =[
    validateJWT,
    hasRoles("true"),
    body("name").notEmpty().withMessage("Name is required"),
    body("name").custom(nameCategoryExists),
    body("description").notEmpty().withMessage("Description is required"),
    bodyValidator
];

export const validatorUpdateCategory = [
    validateJWT,
    hasRoles("true"),
    param("uid").isMongoId().withMessage("No es un ID válido"),
    param("uid").custom(categoryExist),
    body("name").optional().custom(nameCategoryExists),
    bodyValidator
]

export const validatorDeleteCategory =[
    validateJWT,
    hasRoles("true"),
    param("uid").isMongoId().withMessage("No es un ID válido"),
    param("uid").custom(categoryExist),
]