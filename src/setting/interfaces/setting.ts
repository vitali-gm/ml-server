export interface Setting {
    _id: number
    price: Price
    date: string
}

export interface Price {
    firstPeriod: number
    lastPeriod: number
    mastit: number
}