import { Router } from "express";
import { UsersService } from "./users.service";

const router = Router();
const users = new UsersService();

export default router;