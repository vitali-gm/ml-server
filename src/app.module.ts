import { Module } from '@nestjs/common';
import {UserModule} from "./user/user.modules";
import {SettingModule} from "./setting/setting.modules";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ExportModule} from "./export/export.modules";

@Module({
  imports: [UserModule, SettingModule, ExportModule, TypeOrmModule.forRoot()]
})
export class AppModule {}
