import { Router } from "express";
import UserController from "./users.controller";

const router = Router();
const userController = new UserController();


export default router;