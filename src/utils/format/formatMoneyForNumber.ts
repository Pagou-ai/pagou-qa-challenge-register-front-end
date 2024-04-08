export function formatMoneyForNumber(value: string) {
    const extractNumber = value.replace('R$', '').replace(',', '.');

    return parseFloat(extractNumber) * 10;
}