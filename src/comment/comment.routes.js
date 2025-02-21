import { Router } from "express";
import { validationAddComment } from "../middleware/comment-validator.js";
import { addComment } from "./comment.controller.js";

const router = Router()

router.post("/addComment", validationAddComment, addComment);

export default router