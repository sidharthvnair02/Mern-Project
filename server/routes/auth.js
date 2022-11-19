import express from "express";
import { signup } from "../controllers/auth.js";

const router= express.Router();

//CREATE A USER 
router.post("/signup",signup)
//sIGN IN 
router.post("/signin",)

//Google Auth
router.post("/google",)

export default router;