import { cep } from '../regex';

export function validationCep(value: string) {
    return cep.test(value);
}