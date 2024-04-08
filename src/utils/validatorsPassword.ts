export function validateCharacters(password: string) {
    if (password && password?.length >= 20) {
        return true;
    }

    return false;
};

export function validateCharactersSpecial(password: string) {
    if (password && /[^a-zA-Z0-9\s]/.test(password)) {
        return true;
    }

    return false;
};

export function validateNumberOrDigit(password: string) {
    if (password && /\d/.test(password)) {
        return true;
    }

    return false;
};

export function validateLetterLowercase(password: string) {
    if (password && /[a-z]/.test(password)) {
        return true;
    }

    return false;
};

export function validateLetterUppercase(password: string) {
    if (password && /[A-Z]/.test(password)) {
        return true;
    }

    return false;
};