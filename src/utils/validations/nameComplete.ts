import { nameComplete } from '../regex';

export function validationNameComplete(value: string) {
    return nameComplete.test(value);
}