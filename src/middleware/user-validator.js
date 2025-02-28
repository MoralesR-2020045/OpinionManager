import {body, param} from "express-validator";
import { usernameExists, emailExists } from "../helpers/db-validators.js";
import {bodyValidator} from "./document-validator.js"
import { validateJWT } from "./validate-jwt.js";

export const validatorRegister = [
    body("name").notEmpty().withMessage("Name is required"),
    body("surname").notEmpty().withMessage("Surname is required"),
    body("username").notEmpty().withMessage("User name is required"),
    body("username").custom(usernameExists),
    body("email").notEmpty().withMessage("Email is required"),
    body("email").isEmail().withMessage("It is not a valid email"),
    body("email").custom(emailExists),
    body("password").notEmpty().withMessage("El password es obligatorio"),
    body("password").isStrongPassword({
        minLength: 8,
        minLowerCase: 1,
        minUppercase: 1, 
        minNumbers:1,
        minSymbols:1
    }).withMessage("The password must contain at least 8 characters"),
    body("birthdate").isDate(),
    bodyValidator
];

export const loginValidator = [
    body("email").optional().isEmail().withMessage("It is not a valid email"),
    body("username").optional().isString().withMessage("Username is in the wrong format"),
    body("password").isLength({ min: 4 }).withMessage("The password must contain at least 8 characters"),
    bodyValidator
];


export const validateCredentialsUpdate = [
    validateJWT,
    body("username").optional().isString().withMessage("Username is in the wrong format"),
    body("password").optional().isStrongPassword({
        minLength: 8,
        minLowerCase: 1,
        minUppercase: 1, 
        minNumbers:1,
        minSymbols:1
    }).withMessage("The password must contain at least 8 characters"),
    bodyValidator
];