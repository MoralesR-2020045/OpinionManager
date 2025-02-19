import { Router } from "express";
import {validateCredentialsUpdate } from "../middleware/user-validator.js";
import { updateUser } from "./user.controller.js";

const router = Router()

router.patch("/updateCredentials", validateCredentialsUpdate, updateUser);

export default router