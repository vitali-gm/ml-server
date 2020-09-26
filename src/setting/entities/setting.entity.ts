import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Setting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('json')
    price: Price

    @Column()
    date: string
}

interface Price {
    firstPeriod: number,
    lastPeriod: number,
    mastit: number,
}
