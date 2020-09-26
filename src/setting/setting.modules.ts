import { Module } from '@nestjs/common';
import {SettingController} from "./setting.controller";
import {SettingService} from "./setting.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Setting} from "./entities/setting.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Setting])],
    exports: [TypeOrmModule],
    controllers: [SettingController],
    providers: [SettingService],
})
export class SettingModule {}