import { Request, Response } from "express";
import { User } from "./users.schema";
import { hashPassword } from "../../utils/helpers";

export class UsersService {

    async signin(req: Request, res: Response) {
        res.json({ ok: true });
    }

    async createUser(req: Request, res: Response) {
        const { body: data } = req;

        if (!data.email || !data.password || !data.username) return res.status(400).send({ message: 'Bad credentials' });

        data.password = hashPassword(data.password);

        try {
            await User.create(data);
        } catch (e: any) {
            res.status(400).send(e.message);
        }

        res.json({ message: 'User is created' });
    }

    async getMe(req: Request, res: Response) {
        res.json({ ok: true });
    }
}