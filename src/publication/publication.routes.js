import { Router } from "express";
import { addPublication } from "./publication.controller.js";

const router = Router()

router.patch("/updateCredentials", validateCredentialsUpdate, addPublication);

export default router