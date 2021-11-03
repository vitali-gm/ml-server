import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {User} from "./user.entity";

@Entity()
export class Greasiness {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;

    @Column()
    date: string;

    @ManyToOne(
      () => User,
      (user: User) => user.greasiness,
      {onDelete: 'CASCADE'}
      )
    public user: User;
}
