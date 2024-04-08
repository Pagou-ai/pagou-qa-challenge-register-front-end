import { phone } from '../regex';

export function validationPhone(value: string) {
    return phone.test(value);
}