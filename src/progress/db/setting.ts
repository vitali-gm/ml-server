import * as fs from 'fs';
import {Setting} from "../../setting/interfaces/setting";

const path = 'db/settings.json'

export const get = (): Setting[] => {
    const res = fs.readFileSync(path, 'utf8')
    return JSON.parse(res)
}

export const save = (setting: Setting): Setting => {
    const settings = this.get()
    settings.push(setting)
    fs.writeFile(path, JSON.stringify(settings),  'utf8', (err) => {
        if (err) throw err;
    });
    return setting
}

export const update = (date: string, setting: Setting): Setting => {
    const settings = this.get()
    const index = settings.findIndex(item => item.date == date);
    settings[index] = setting

    fs.writeFile(path, JSON.stringify(settings),  'utf8', (err) => {
        if (err) throw err;
    });
    return setting
}