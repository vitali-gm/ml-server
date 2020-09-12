import { Module } from '@nestjs/common';
import {UserModule} from "./user/user.modules";
import {SettingModule} from "./setting/setting.modules";

@Module({
  imports: [UserModule, SettingModule]
})
export class AppModule {}
