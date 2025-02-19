import { Router } from "express";
import { login, register } from "./auth.controller.js";
import { uploadProfilePicture } from "../middleware/multer-uploads.js";
import { loginValidator, validatorRegister } from "../middleware/user-validator.js";

const router = Router()


router.post("/register", uploadProfilePicture.single("profilePicture"), validatorRegister, register);
router.post("/login", loginValidator, login); 


export default router