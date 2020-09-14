import { Module } from '@nestjs/common';
import {UserModule} from "./user/user.modules";
import {SettingModule} from "./setting/setting.modules";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [UserModule, SettingModule, TypeOrmModule.forRoot()]
})
export class AppModule {}
