import { Module } from '@nestjs/common';
import {ExportController} from "./export.controller";
import {UserService} from "../user/user.service";
import {SettingService} from "../setting/setting.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/entities/user.entity";
import {Setting} from "../setting/entities/setting.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User, Setting])],
    exports: [TypeOrmModule],
    controllers: [ExportController],
    providers: [UserService, SettingService]
})
export class ExportModule {}