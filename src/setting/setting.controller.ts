import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {SettingService} from "./setting.service";
import {Setting} from "./entities/setting.entity";

@Controller('setting')
export class SettingController {
    constructor(private readonly settingService: SettingService) {}

    @Get()
    async findAll(): Promise<Setting[]> {
        return this.settingService.findAll()
    }

    @Post()
    async create(@Body() setting: Setting): Promise<Setting> {
        return this.settingService.create(setting)
    }

    @Put(':id')
    async update(@Param('id') id: number ,@Body() setting: Setting): Promise<Setting> {
        await this.settingService.update(id, setting)
        return this.settingService.findOne(id)
    }

}