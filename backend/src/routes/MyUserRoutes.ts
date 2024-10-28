import express, { Router } from "express";
import MyUserController from "../controllers/myUserController";

const router = express.Router();

// /api/my/user
router.post("/", MyUserController.createCurrentUser);

export default router;