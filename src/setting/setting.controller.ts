import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {SettingService} from "./setting.service";
import {Setting} from "./interfaces/setting";

@Controller('setting')
export class SettingController {
    constructor(private readonly userService: SettingService) {}

    @Get()
    async findAll(): Promise<Setting[]> {
        return this.userService.findAll()
    }

    @Post()
    async create(@Body('user') user: Setting): Promise<Setting> {
        return this.userService.create(user)
    }

    @Put()
    async update(@Param('date') date: string ,@Body('setting') setting: Setting): Promise<Setting> {
        return this.userService.update(date, setting)
    }

}