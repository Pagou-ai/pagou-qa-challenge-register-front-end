export function validationCNPJ(value: string) {
    value = value.replace(/[^\d]/g, '');

    if (value.length !== 14) {
        return false;
    }

    if (/^(\d)\1{13}$/.test(value)) {
        return false;
    }

    let sum = 0;
    let weight = 5;
    for (let i = 0; i < 12; i++) {
        sum += parseInt(value.charAt(i)) * weight;
        weight = (weight === 2) ? 9 : weight - 1;
    }
    let rest = sum % 11;
    let digitVerifier1 = (rest < 2) ? 0 : 11 - rest;
    if (parseInt(value.charAt(12)) !== digitVerifier1) {
        return false;
    }

    sum = 0;
    weight = 6;
    for (let i = 0; i < 13; i++) {
        sum += parseInt(value.charAt(i)) * weight;
        weight = (weight === 2) ? 9 : weight - 1;
    }
    rest = sum % 11;
    let digitVerifier2 = (rest < 2) ? 0 : 11 - rest;
    if (parseInt(value.charAt(13)) !== digitVerifier2) {
        return false;
    }

    return true;
}
