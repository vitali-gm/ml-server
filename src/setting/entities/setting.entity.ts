import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Setting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: string

    @Column()
    date: string
}
