import { Request, Response } from "express";
import { User } from "../users/users.model";
import { comparePassword, generateJWT, verifyJWT } from "../../utils/helpers";

class AuthController {

    checkUser(user: any, res: Response) {
        if (!user) return res.json({ exists: false, twoFac: false });
        if (!user.password) return res.json({ exists: true, twoFac: false });
        return res.json({ exists: true, twoFac: true });
    }

    async auth(req: Request, res: Response) {
        const { body } = req;

        if (body?.email) return res.status(400).json({ message: 'Bad credentials' });

        const user: any = await User.findOne({ email: body.email });

        if (body.email) this.checkUser(user, res);
        if (body.password) await this.checkPassword(user, res, body);
    }

    async getMe(req: any, res: Response) {
        res.json({ user: req.user });
    }

    async checkPassword(user: any, res: Response, body: any) {
        const result = comparePassword(user.password, body.password);

        if (!result) return res.status(400).json({ message: 'Invalid password' });

        const isValidRefresh = verifyJWT(user.refreshToken);

        if (!isValidRefresh) {
            const refreshToken = generateJWT({ _id: user._id }, { expiresIn: '90d' });

            await User.updateOne({ _id: user._id }, { refreshToken });
        }

        const accessToken = generateJWT({ _id: user._id }, { expiresIn: '5h' });

        return res.json({ accessToken });
    }

}

export default AuthController;