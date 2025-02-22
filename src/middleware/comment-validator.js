import { body, param } from "express-validator";
import { bodyValidator } from "./document-validator.js";
import { validateJWT } from "./validate-jwt.js";
import { commentExist, publicationExist } from "../helpers/db-validators.js";
import { hasRoles } from "./validate-admin.js";



export const validationAddComment =[
    validateJWT,
    hasRoles(false),
    body("comment").notEmpty().withMessage("Comment is required"),
    body("publicationcomment").isMongoId().withMessage("No es un ID válido"),
    body("publicationcomment").custom(publicationExist),
    bodyValidator
];

export const validationUpdateComment = [
    validateJWT,
    hasRoles(false),
    param("uid").isMongoId().withMessage("It is not a valid id"),
    body("comment").notEmpty().withMessage("Comment is required"),
    bodyValidator
]

export const validatorDeleteComment=[
    validateJWT,
    hasRoles(false),
    param("uid").isMongoId().withMessage("No es un ID válido"),
    param("uid").custom(commentExist),
]