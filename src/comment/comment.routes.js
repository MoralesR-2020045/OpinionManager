import { Router } from "express";
import { validationAddComment, validationUpdateComment, validatorDeleteComment } from "../middleware/comment-validator.js";
import { addComment, deleteComment, getComment, updateComment } from "./comment.controller.js";

const router = Router()

/**
 * @swagger
 * /addComment:
 *   post:
 *     summary: Add a new comment
 *     tags: [Comment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               publicationId:
 *                 type: string
 *                 description: ID of the publication
 *               content:
 *                 type: string
 *                 description: Content of the comment
 *     responses:
 *       201:
 *         description: Comment added successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.post("/addComment", validationAddComment, addComment);

/**
 * @swagger
 * /updateComment/{uid}:
 *   patch:
 *     summary: Update a comment
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: Unique ID of the comment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: Updated content of the comment
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal server error
 */
router.patch("/updateComment/:uid", validationUpdateComment, updateComment)

/**
 * @swagger
 * /deleteComment/{uid}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: Unique ID of the comment
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteComment/:uid", validatorDeleteComment, deleteComment);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all comments
 *     tags: [Comment]
 *     responses:
 *       200:
 *         description: List of comments
 *       500:
 *         description: Internal server error
 */
router.get("/", getComment);

export default router