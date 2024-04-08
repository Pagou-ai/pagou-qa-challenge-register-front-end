import { maturity } from '../regex';

export function validationMaturity(value: string) {
    if (maturity.test(value)) {
        const currentDate = new Date();
        const yearCurrent = currentDate.getFullYear() % 100;
        const monthCurrent = currentDate.getMonth() + 1;

        const [partOne, partTwo] = value.split('/');

        const month = parseInt(partOne);
        const year = parseInt(partTwo);

        if (year < yearCurrent || (year === yearCurrent && month < monthCurrent)) {
            return false;
        }

        return true;
    }


    return false;
}