import { Router } from "express";
import { sendContact } from "../controllers/contactController.js";
import { validateContact } from "../middleware/validate.js";

const router = Router();
router.post("/", validateContact, sendContact);
export default router;
