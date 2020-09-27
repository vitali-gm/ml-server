import {Controller, Get } from '@nestjs/common';
import {Export} from "./export.service";
import {UserService} from "../user/user.service";
import {SettingService} from "../setting/setting.service";

@Controller('export')
export class ExportController {
    constructor(
        private readonly userService: UserService,
        private readonly settingService: SettingService
    ) {}

    @Get()
    async export(): Promise<any> {
        const exportData = await (new Export()).handle()
        console.log(exportData)

        await this.userService.create(exportData.users)
        await this.settingService.create(exportData.settings)
    }
}