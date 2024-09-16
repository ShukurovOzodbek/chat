import { Router } from "express";
import UsersController from './users/users.controller';

const router = Router();

router.use('/users', UsersController);

export default router;