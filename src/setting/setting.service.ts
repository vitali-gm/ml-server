import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Setting} from "./entities/setting.entity";
import {Repository} from "typeorm";

@Injectable()
export class SettingService {

    constructor(
        @InjectRepository(Setting)
        private settingRepository: Repository<Setting>,
    ) {}

    async findAll(): Promise<Setting[]> {
        return  this.settingRepository.find()
    }
    async findOne(id: number): Promise<Setting> {
        return this.settingRepository.findOne(id)
    }

    async create(setting: Setting): Promise<Setting> {
        return this.settingRepository.save(setting)
    }

    async update(id: number, setting: Setting): Promise<Setting> {
        await this.settingRepository.save({ ...setting, id: Number(id) })
        return this.settingRepository.findOne(id)
    }
}