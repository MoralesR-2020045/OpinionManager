import { Router } from "express";
import { addCategory, deleteCategory, getCategory, updateCategory } from "./category.controller.js";
import { validationAddCategory, validatorUpdateCategory, validatorDeleteCategory } from "../middleware/category-validator.js";

const router = Router()

/**
 * @swagger
 * /addCategory:
 *   post:
 *     summary: Add a new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the category
 *     responses:
 *       201:
 *         description: Category added successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.post("/addCategory", validationAddCategory, addCategory);

/**
 * @swagger
 * /updateCategory/{uid}:
 *   put:
 *     summary: Update a category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: Unique ID of the category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated name of the category
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 */
router.put("/updateCategory/:uid", validatorUpdateCategory, updateCategory);

/**
 * @swagger
 * /deleteCategory/{uid}:
 *   delete:
 *     summary: Delete a category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: Unique ID of the category
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteCategory/:uid", validatorDeleteCategory, deleteCategory)

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all categories
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: List of categories
 *       500:
 *         description: Internal server error
 */
router.get("/", getCategory)
export default router