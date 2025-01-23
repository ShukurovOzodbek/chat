import { Router } from "express";
import { authorize } from "../../middleware/user-middleware";
import AuthController from "./auth.controller";

const router = Router();
const authController = new AuthController();

router.post('/auth', authController.auth.bind(authController));
router.post('/me', authorize, authController.getMe);

export default router;
