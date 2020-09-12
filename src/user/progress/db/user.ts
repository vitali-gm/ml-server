import * as fs from 'fs';

const path = 'db/users.json'

export const get = () => {
    const res = fs.readFileSync(path, 'utf8')
    return JSON.parse(res)
}

export const findById = (id) => {
    const users = this.get()
    const index = users.findIndex(user => user._id === id)
    if (index !== -1) {
        return users[index]
    }
}

export const save = (user) => {
    const users = this.get()
    user._id = Date.now()
    user.records = []
    user.greasiness = []
    user.countCows = []
    users.push(user)
    fs.writeFile(path, JSON.stringify(users),  'utf8', (err) => {
        if (err) throw err;
    });
    return user
}

export const update = (id, data) => {
    const users = this.get()

    const index = users.findIndex(user => user._id === id);
    if (data.name) users[index].name = data.name;
    if (data.records) users[index].records = data.records;
    if (data.greasiness) users[index].greasiness = data.greasiness;
    if (data.countCows) users[index].countCows = data.countCows;

    fs.writeFile(path, JSON.stringify(users),  'utf8', (err) => {
        if (err) throw err;
    });
    return data[index]
}