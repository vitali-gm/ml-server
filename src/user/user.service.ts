import { Injectable } from '@nestjs/common';
import {User} from "./interfaces/user";
import * as userModel from '../progress/db/user'

@Injectable()
export class UserService {

    findAll(): User[] {
        return  userModel.get()
    }

    findOne(id: number): User {
        return userModel.findById(id)
    }

    create(user: User): User {
        return userModel.save(user)
    }

    update(id: number, user: User): User {
        return userModel.update(id, user)
    }
}