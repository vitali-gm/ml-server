import { Injectable } from '@nestjs/common';
import {NewUser, User} from "./interfaces/user";
import * as userModel from './progress/db/user'

@Injectable()
export class UserService {

    private users: User[] = userModel.get()

    findAll(): User[] {
        return  this.users
    }

    create(user: NewUser): User {
        return userModel.save(user)
    }

    update(id: number, data: object): User {
        return userModel.update(id, data)
    }
}