import { Router } from "express";
import { UsersService } from "./users.service";
import { authorize } from "../../middleware/user-middleware";

const router = Router();
const users = new UsersService();

router.post('/auth', users.auth);
router.get('/me', authorize, users.getMe);

export default router;