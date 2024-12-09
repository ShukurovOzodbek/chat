import { Request, Response } from "express";
import { User } from "./users.schema";
import { checkPassword, checkUser } from "../../utils/auth";


export class UsersService {

    async auth(req: Request, res: Response) {
        const { body } = req;

        if (body?.phoneNumber) return res.status(400).json({ message: 'Bad credentials' });

        const user: any = await User.findOne({ phoneNumber: body.phoneNumber });

        if (body.phoneNumber) checkUser(user, res);
        if (body.password) await checkPassword(user, res, body);
    }

    async getMe(req: any, res: Response) {
        res.json({ user: req.user });
    }
}