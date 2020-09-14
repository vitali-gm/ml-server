import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {User} from "./user.entity";

@Entity()
export class Cows {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;

    @Column()
    date: string;

    @ManyToOne(() => User, (user: User) => user.countCows)
    public user: User;
}