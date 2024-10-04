import { Router } from "express";
import { UsersService } from "./users.service";
import { authorize } from "../../middleware/user-middleware";

const router = Router();
const users = new UsersService();

router.post('/signin', users.signin);
router.post('/signup', users.signup);
router.get('/me', authorize, users.getMe);

export default router;