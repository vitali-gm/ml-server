import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import {User} from "./user.entity";

@Entity()
export class Record {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    liters: number;

    @Column()
    date: string;

    @ManyToOne(
      () => User,
      (user: User) => user.records,
      {onDelete: 'CASCADE'}
      )
    public user: User;
}
