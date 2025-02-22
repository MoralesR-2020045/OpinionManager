import { Router } from "express";
import { validateCredentialsUpdate } from "../middleware/user-validator.js";
import { updateUser } from "./user.controller.js";

const router = Router()

/**
 * @swagger
 * /updateCredentials:
 *   put:
 *     summary: Update user credentials
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: New email of the user
 *               password:
 *                 type: string
 *                 description: New password of the user
 *     responses:
 *       200:
 *         description: User credentials updated successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.put("/updateCredentials", validateCredentialsUpdate, updateUser);

export default router