import { Router } from "express";
import userRoutes from "./users/user.routes";
import authRoutes from "./auth/auth.routes";
import imageRoutes from "./images/image.routes";

const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/images', imageRoutes);

export default router;