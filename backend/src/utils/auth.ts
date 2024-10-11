import { Response } from "express";
import { comparePassword, generateJWT, verifyJWT } from "./helpers";
import { User } from "../modules/users/users.schema";

export function checkUser(user: any, res: Response) {
    if (!user) return res.json({ exists: false, twoFac: false });
    if (!user.password) return res.json({ exists: true, twoFac: false });
    return res.json({ exists: true, twoFac: true });
}

export async function checkPassword(user: any, res: Response, body: any) {
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