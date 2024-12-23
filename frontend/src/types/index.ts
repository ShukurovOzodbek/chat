type Patterns = {
    message: string,
    pattern: RegExp
};

export type ValidateSchema = {
    key: string,
    defaultMessage: string,
    patterns: Patterns[]
};


export type UserMailAuth = {
    email: string
};

export type ValidationResult = {
    errors: {
        [key: string]: string
    },
    isError: boolean
}