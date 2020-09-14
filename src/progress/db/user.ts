import * as fs from 'fs';
import {User} from "../../user/interfaces/user";

const path = 'db/users.json'

export const get = (): User[] => {
    const res = fs.readFileSync(path, 'utf8')
    return JSON.parse(res)
}

export const findById = (id: number): User => {
    const users = this.get()
    return users.find(item => item._id == id)
}

export const save = (user: User): User => {
    const users = this.get()
    user._id = Date.now()
    users.push(user)
    fs.writeFile(path, JSON.stringify(users),  'utf8', (err) => {
        if (err) throw err;
    });
    return user
}

export const update = (id: number, user: User): User => {
    const users = this.get()
    const index = users.findIndex(user => user._id == id);
    users[index] = user

    fs.writeFile(path, JSON.stringify(users),  'utf8', (err) => {
        if (err) throw err;
    });
    return user
}