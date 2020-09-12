export class CreateUserDto {
    _id: number
    readonly name: string
    readonly lastName: string
    records: Record[]
    greasiness: Greasiness[]
    countCows: CountCows[]
}

export class Record {
    readonly liters: number
    readonly date: string
}

export class Greasiness {
    readonly value: number
    readonly date: string
}

export class CountCows {
    readonly value: number
    readonly date: string
}