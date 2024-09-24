import * as bcrypt from 'bcrypt';

export function hashPassword(password: string) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

export function comparePassword(hash: string, password: string) {
    return bcrypt.compareSync(hash, password);
}