import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Record} from "./record.entity";
import {Greasiness} from "./greasiness.entity";
import {Cows} from "./cows.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    order: number;

    @OneToMany(
        () => Record,
        (record: Record) => record.user,
        // {cascade: true, onDelete: 'CASCADE'}
        )
    records: Record[]

    @OneToMany(
        () => Greasiness,
        (greasiness:Greasiness) => greasiness.user,
        // {cascade: true, onDelete: 'CASCADE'}
        )
    greasiness: Greasiness[]

    @OneToMany(
      () => Cows,
      (cow:Cows) => cow.user,
      // {cascade: true, onDelete: 'CASCADE'}
      )
    countCows: Cows[]
}