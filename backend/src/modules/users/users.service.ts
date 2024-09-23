import { Request, Response } from "express";
import { User } from "./users.schema";

export class UsersService {
    User: any;

    constructor() {
        this.User = User;
    }

    async signin(req: Request, res: Response) {
        console.log(req.user);

        res.json({ ok: true });
    }

    async createUser(req: Request, res: Response) {
        const { body: data } = req;

        if (!data.email || !data.password || !data.username) return res.status(400).send({ message: 'Bad credentials' });

        
    }
}