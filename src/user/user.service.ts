import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "./entities/user.entity";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}


    async findAll(): Promise<User[]> {
        return this.usersRepository.find({
            relations: ['records', 'greasiness', 'countCows'],
            order: {
                order: "ASC"
            }
        })
    }

    async findOne(id: number): Promise<User> {
        return this.usersRepository.findOne(id, {
            relations: ['records', 'greasiness', 'countCows']
        })
    }

    async create(user: User): Promise<User> {
        return this.usersRepository.save(user)
    }

    async update(id: number, user: User): Promise<User> {
        return  this.usersRepository.save({ ...user, id: Number(id) })
    }

    async updateAll(users: User[]): Promise<User[]> {
        await this.usersRepository.save(users)
        return this.usersRepository.find({
            relations: ['records', 'greasiness', 'countCows'],
            order: {
                order: "ASC"
            }
        })
    }

    async delete(id: number): Promise<any> {
        return this.usersRepository.delete(id)
    }
}
