import { Router } from "express";
import UserController from "./user.controller";

const router = Router();
const userController = new UserController();


export default router;