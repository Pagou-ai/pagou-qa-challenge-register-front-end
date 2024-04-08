export function forceFormatBirthDate(currentBirthDate: string): string {
    const [day, month, year] = currentBirthDate.split('/');

    if (day && month && year) {
      return `${year}-${month}-${day}`;
    }

    return '';
  }