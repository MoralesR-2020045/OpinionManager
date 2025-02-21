import { Router } from "express";
import { addPublicationValidator, updatePublicationValidator } from "../middleware/publication-validator.js";
import {addPublication, updatePublication} from "../publication/publication.controller.js"
const router = Router()

router.post("/addPublication", addPublicationValidator, addPublication);

router.put("/updatePublication/:uid", updatePublicationValidator, updatePublication )
export default router