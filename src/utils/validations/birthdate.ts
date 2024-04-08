import { birthdate } from "../regex";

export function validationBirthdate(value: string) {
    if (!birthdate.test(value)) {
        return false;
    };

    const [one, two, three] = value.split('/')
    const day = parseInt(one, 10)
    const month = parseInt(two, 10)
    const year = parseInt(three, 10)

    const dateFormat = new Date(year, month, day)

    const dateCurrent = new Date()

    if (dateFormat < dateCurrent) {
        return true
    }

    return false
}