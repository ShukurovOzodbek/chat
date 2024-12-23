import type { ValidateSchema, ValidationResult } from "~/types";

export default (schemas: ValidateSchema[], data: any): ValidationResult => {
    const result: ValidationResult = {
        isError: false,
        errors: {}
    };

    for (const { key, defaultMessage, patterns } of schemas) {
        const value = data[key];

        if (!value) {
            result.errors[key] = defaultMessage;
            result.isError = true;
            break;
        }

        const invalidPattern = patterns.find(({ pattern }) => !pattern.test(value));
        if (invalidPattern) {
            result.errors[key] = invalidPattern.message;
            result.isError = true;
            break;
        }
    }

    return result;
};