import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {SettingService} from "./setting.service";
import {Setting} from "./interfaces/setting";

@Controller('setting')
export class SettingController {
    constructor(private readonly settingService: SettingService) {}

    @Get()
    async findAll(): Promise<Setting[]> {
        return this.settingService.findAll()
    }

    @Post()
    async create(@Body('user') user: Setting): Promise<Setting> {
        return this.settingService.create(user)
    }

    @Put()
    async update(@Param('date') date: string ,@Body('setting') setting: Setting): Promise<Setting> {
        return this.settingService.update(date, setting)
    }

}