import express from "express";
import { createContactLead } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/create", createContactLead);

export default router;