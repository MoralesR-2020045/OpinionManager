import { Router } from "express";
import { validationAddComment, validationUpdateComment } from "../middleware/comment-validator.js";
import { addComment, updateComment } from "./comment.controller.js";

const router = Router()

router.post("/addComment", validationAddComment, addComment);
router.patch("/updateComment/:uid", validationUpdateComment, updateComment)

export default router