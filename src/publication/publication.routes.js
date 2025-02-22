import { Router } from "express";
import { addPublicationValidator, updatePublicationValidator, validatorDeletePublication } from "../middleware/publication-validator.js";
import { addPublication, deletePublication, getPublication, updatePublication } from "../publication/publication.controller.js"
const router = Router()

/**
 * @swagger
 * /addPublication:
 *   post:
 *     summary: Add a new publication
 *     tags: [Publication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the publication
 *               content:
 *                 type: string
 *                 description: Content of the publication
 *     responses:
 *       201:
 *         description: Publication added successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.post("/addPublication", addPublicationValidator, addPublication);

/**
 * @swagger
 * /updatePublication/{uid}:
 *   put:
 *     summary: Update a publication
 *     tags: [Publication]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: Unique ID of the publication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Updated title of the publication
 *               content:
 *                 type: string
 *                 description: Updated content of the publication
 *     responses:
 *       200:
 *         description: Publication updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Publication not found
 *       500:
 *         description: Internal server error
 */
router.put("/updatePublication/:uid", updatePublicationValidator, updatePublication);

/**
 * @swagger
 * /deletePublication/{uid}:
 *   delete:
 *     summary: Delete a publication
 *     tags: [Publication]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: Unique ID of the publication
 *     responses:
 *       200:
 *         description: Publication deleted successfully
 *       404:
 *         description: Publication not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deletePublication/:uid", validatorDeletePublication, deletePublication);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all publications
 *     tags: [Publication]
 *     responses:
 *       200:
 *         description: List of publications
 *       500:
 *         description: Internal server error
 */
router.get("/", getPublication);

export default router