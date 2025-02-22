import { Router } from "express";
import { login, register } from "./auth.controller.js";
import { uploadProfilePicture } from "../middleware/multer-uploads.js";
import { loginValidator, validatorRegister } from "../middleware/user-validator.js";

const router = Router()

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Username of the new user
 *               email:
 *                 type: string
 *                 description: Email of the new user
 *               password:
 *                 type: string
 *                 description: Password of the new user
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *                 description: Profile picture of the new user
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.post("/register", uploadProfilePicture.single("profilePicture"), validatorRegister, register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email of the user
 *               password:
 *                 type: string
 *                 description: Password of the user
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post("/login", loginValidator, login);

export default router