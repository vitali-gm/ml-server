import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {User} from "./interfaces/user";
import {UserService} from "./user.service";
import {CreateUserDto} from "./interfaces/createUserDto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): User[] {
        return this.userService.findAll()
    }

    @Post()
    create(@Body() user: CreateUserDto): User {
        return this.userService.create(user)
    }

    @Put()
    update(@Param('id') id: string ,@Body() data: object): User {
        return this.userService.update(parseInt(id), data)
    }

}