import { email } from '../regex';

export function validationEmail(value: string) {
    return email.test(value);
}