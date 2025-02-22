import { Router } from "express";
import { validationAddComment, validationUpdateComment, validatorDeleteComment} from "../middleware/comment-validator.js";
import { addComment, deleteComment, getComment, updateComment } from "./comment.controller.js";

const router = Router()

router.post("/addComment", validationAddComment, addComment);
router.patch("/updateComment/:uid", validationUpdateComment, updateComment)

router.delete("/deletePublication/:uid", validatorDeleteComment, deleteComment);

router.get("/", getComment);

export default router