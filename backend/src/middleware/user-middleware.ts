import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const authorize = (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.headers?.authorization;

    if (!accessToken) return res.status(403).json({ message: 'Forbidden' });

    let payload = {};

    try {
        const secret: any = process.env.JWT_SECRET;
        payload = jwt.verify(accessToken, secret);
    } catch (e: any) {
        return res.status(403).json({ message: e.message });
    }

    

    next();
}