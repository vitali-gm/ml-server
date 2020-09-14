import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {User} from "./user.entity";

@Entity()
export class Greasiness {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;

    @Column()
    date: string;

    @ManyToOne(() => User, (user: User) => user.greasiness)
    public user: User;
}