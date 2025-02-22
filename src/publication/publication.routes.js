import { Router } from "express";
import { addPublicationValidator, updatePublicationValidator, validatorDeletePublication } from "../middleware/publication-validator.js";
import {addPublication, deletePublication, getPublication, updatePublication} from "../publication/publication.controller.js"
const router = Router()

router.post("/addPublication", addPublicationValidator, addPublication);

router.put("/updatePublication/:uid", updatePublicationValidator, updatePublication );

router.delete("/deletePublication/:uid", validatorDeletePublication, deletePublication);

router.get("/", getPublication);
export default router