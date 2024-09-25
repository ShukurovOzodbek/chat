import { Router } from "express";
import { UsersService } from "./users.service";

const router = Router();
const users = new UsersService();

router.post('/signin', users.signin);
router.post('/signup', users.signup);
router.get('/me', users.getMe);

export default router;