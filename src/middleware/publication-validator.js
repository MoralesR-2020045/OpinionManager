import {body, param} from "express-validator";
import {categoryExist } from "../helpers/db-validators.js";
import {bodyValidator} from "./document-validator.js"
import { validateJWT } from "./validate-jwt.js";
import { hasRoles } from "./validate-admin.js";

export const addPublicationValidator = [
    validateJWT,
    hasRoles("false"),
    body("publicationtitle").notEmpty().withMessage("The title of the publication is required"),
    body("content").notEmpty().withMessage("Content needed for publication"),
    body("category").notEmpty().isMongoId().withMessage("It is not a valid id"),
    body("category").custom(categoryExist),
    bodyValidator
]