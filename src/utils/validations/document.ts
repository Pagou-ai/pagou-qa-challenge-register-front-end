import { document } from '../regex';

export function validationDocument(value: string) {
    return document.test(value);
}