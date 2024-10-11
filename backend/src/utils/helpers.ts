import * as bcrypt from 'bcrypt';
import { JWTPayload } from '../types';
import jwt from 'jsonwebtoken';

export function hashPassword(password: string) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

export function comparePassword(hash: string, password: string) {
    return bcrypt.compareSync(password, hash);
}

export function generateJWT(payload: JWTPayload, addons: any) {
    const secret: any = process.env.JWT_SECRET;
    const accessToken = jwt.sign(payload, secret, addons);

    return accessToken;
}

export function verifyJWT(token: string) {
    const secret: any = process.env.JWT_SECRET;

    return jwt.verify(token, secret);
}