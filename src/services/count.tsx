
export const count = (num: number): number => {
    return num++
}

export const multiply = (num: number, mult: number): number | string => {
    if(mult === 2 || mult === 3) {
        return num * mult
    }

    return 'Multiplicador não aceito';
}