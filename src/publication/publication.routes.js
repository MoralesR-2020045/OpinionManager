import { Router } from "express";
import { addPublicationValidator } from "../middleware/publication-validator.js";
import { uploadProfilePicture } from "../middleware/multer-uploads.js";
import {addPublication} from "../publication/publication.controller.js"
const router = Router()

router.post("/addPublication", uploadProfilePicture.single("publicationPicture"), addPublicationValidator, addPublication);

export default router