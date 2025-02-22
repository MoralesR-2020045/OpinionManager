import {body, param} from "express-validator";
import {categoryExist, publicationExist } from "../helpers/db-validators.js";
import {bodyValidator} from "./document-validator.js"
import { validateJWT } from "./validate-jwt.js";
import { hasRoles } from "./validate-admin.js";

export const addPublicationValidator = [
    validateJWT,
    hasRoles(false),
    body("publicationtitle").notEmpty().withMessage("The title of the publication is required"),
    body("content").notEmpty().withMessage("Content needed for publication"),
    body("category").notEmpty().isMongoId().withMessage("It is not a valid id"),
    body("category").custom(categoryExist),
    bodyValidator
];

export const updatePublicationValidator = [
    validateJWT,
    hasRoles(false),
    param("uid").isMongoId().withMessage("It is not a valid id"),
    param("uid").custom(publicationExist),
    body("publicationtitle").optional(),
    body("content").optional(),
    body("category").optional().isMongoId().withMessage("It is not a valid id").custom(categoryExist),
    bodyValidator

];


export const validatorDeletePublication =[
    validateJWT,
    hasRoles(false),
    param("uid").isMongoId().withMessage("No es un ID válido"),
    param("uid").custom(publicationExist),
]