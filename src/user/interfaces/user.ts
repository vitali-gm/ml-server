export interface User {
    _id: number,
    name: string
    records: Record[]
    greasiness: Greasiness[]
    countCows: CountCows[]
}

export interface Record {
    liters: number,
    date: string
}

export interface Greasiness {
    value: number,
    date: string
}

export interface CountCows {
    value: number,
    date: string
}