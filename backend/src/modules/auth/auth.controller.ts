import { Router } from "express";
import { authorize } from "../../middleware/user-middleware";
import { AuthService } from "./auth.service";

const router = Router();
const authService = new AuthService();

router.post('/auth', authService.auth);
router.post('/me', authorize, authService.auth);

export default router;
