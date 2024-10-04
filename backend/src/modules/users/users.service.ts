import { Request, Response } from "express";
import { User } from "./users.schema";
import { comparePassword, generateJWT, hashPassword } from "../../utils/helpers";


export class UsersService {

    async signin(req: Request, res: Response) {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: 'Bad credentials' });
        if (!user.password) return res.status(400).json({ message: 'Something went wrong' });

        const isCorrectPass = comparePassword(user.password, password);

        if (!isCorrectPass) return res.status(400).json({ message: 'Bad credentails' });

        const accessToken = generateJWT({ _id: user._id }, { expiresIn: '3d' });

        res.json({
            accessToken: accessToken,
            user
        });
    }

    async signup(req: Request, res: Response) {
        const { body: data } = req;

        if (!data.email || !data.password || !data.username) return res.status(400).send({ message: 'Bad credentials' });

        data.password = hashPassword(data.password);

        try {
            await User.create(data);
        } catch (e: any) {
            res.status(400).send(e);
        }

        res.json({ message: 'User is created' });
    }

    async getMe(req: Request, res: Response) {
        res.json({ ok: true });
    }
}