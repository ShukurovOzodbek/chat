import { Router } from "express";
import UsersController from './users/users.controller';
import AuthController from './auth/auth.controller';

const router = Router();

router.use('/users', UsersController);
router.use('/auth', AuthController);

export default router;