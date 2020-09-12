import { Injectable } from '@nestjs/common';
import * as settingModel from '../progress/db/setting'
import {Setting} from "./interfaces/setting";

@Injectable()
export class SettingService {

    findAll(): Setting[] {
        return  settingModel.get()
    }

    create(setting: Setting): Setting {
        return settingModel.save(setting)
    }

    update(date: string, setting: Setting): Setting {
        return settingModel.update(date, setting)
    }
}