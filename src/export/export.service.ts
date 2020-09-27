import * as fs from 'fs';
import {Injectable} from "@nestjs/common";

@Injectable()
export class Export {
    async handle(): Promise<any> {
        let users = JSON.parse(fs.readFileSync("db/user.json", 'utf8'))
        let settings = JSON.parse(fs.readFileSync("db/settings.json", 'utf8'))

        users = users.map((item, index) => {
            const user = {
                name: item.name,
                order: index + 1
            }

            if (item.records !== undefined) {
                user['records'] = item.records
            }

            if (item.greasiness !== undefined) {
                user['greasiness'] = item.greasiness
            }

            if (item.countCows !== undefined) {
                user['countCows'] = item.countCows
            }

            return user
        })

        settings = settings.map(item => {
            return {
                price: item.price,
                date: item.date
            }
        })

        return {
            users,
            settings
        }
    }

}