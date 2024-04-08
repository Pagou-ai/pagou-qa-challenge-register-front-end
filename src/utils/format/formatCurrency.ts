export function formatCurrency(money: string) {
    const numericValue = String(money).replace(/\D/g, '');


    const formattedValue = (Number(numericValue) / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return formattedValue;
};