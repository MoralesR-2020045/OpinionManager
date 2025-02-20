import {body, param} from "express-validator";
import { usernameExists, emailExists } from "../helpers/db-validators.js";
import {bodyValidator} from "./document-validator.js"
import { validateJWT } from "./validate-jwt.js";

export const addPublicationValidator = [
    body("publicationtitle").notEmpty().withMessage("The title of the publication is required"),
    
]