import * as crypto from 'crypto';

export function hashPassword(password: string) {
    const salt = crypto.randomBytes(32).toString('hex')
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return genHash;
}

export function comparePassword(hash: string, password: string) {
    const salt = crypto.randomBytes(32).toString('hex')
    const checkHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return hash === checkHash;
}