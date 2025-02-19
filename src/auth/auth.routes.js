import { Router } from "express";
import { register } from "./auth.controller.js";
import { uploadProfilePicture } from "../middleware/multer-uploads.js";
import { validatorRegister } from "../middleware/user-validator.js";

const router = Router()


router.post("/register", uploadProfilePicture.single("profilePicture"), validatorRegister, register);


export default router