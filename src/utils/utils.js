export function generateRandomAge() {
    const min = 12;
    const max = 35;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function sumObjectValues(form) {
    let sum = 0;

    for (const value of Object.values(form)) {
        sum += Number(value);
    }

    return sum;
}