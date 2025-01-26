import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken';
import { User } from "../modules/users/user.model";

export const authorize = async (req: any, res: Response, next: NextFunction) => {
    const accessToken = req.headers?.authorization;

    if (!accessToken) return res.status(403).json({ message: 'Forbidden' });

    let payload: any = {};

    try {
        const secret: any = process.env.JWT_SECRET;
        payload = jwt.verify(accessToken, secret);
    } catch (e: any) {
        return res.status(403).json({ message: e.message });
    }

    if (!payload._id) return res.status(403).json({ message: 'Forbidden' });

    const user = await User.findById(payload._id);

    req.user = user;

    next();
}