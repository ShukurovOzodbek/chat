import { Router } from "express";
import passport from "passport";
import { UsersService } from "./users.service";

const router = Router();
const users = new UsersService();

router.post('/', passport.authenticate('local'), users.signin);

router.post('/create', users.createUser);

export default router;