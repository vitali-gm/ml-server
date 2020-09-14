import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import {Record} from "./record.entity";
import {Greasiness} from "./greasiness.entity";
import {Cows} from "./cows.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(
        () => Record,
        (record: Record) => record.user,
        {cascade: true, onUpdate: "CASCADE"}
        )
    @JoinColumn()
    records: Record[]

    @OneToMany(
        () => Greasiness,
        (greasiness:Greasiness) => greasiness.user,
        {cascade: true}
        )
    greasiness: Greasiness[]

    @OneToMany(() => Cows, (cow:Cows) => cow.user, {cascade: true})
    countCows: Cows[]
}