import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./entities/user.entity";
import {UpdateResult} from "typeorm";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Get(':id')
    async find(@Param('id') id: number): Promise<User> {
        return this.userService.findOne(id)
    }

    @Post()
    async create(@Body('user') user: User): Promise<User> {
        return this.userService.create(user)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body('user') user: User): Promise<UpdateResult> {
        return this.userService.update(parseInt(id), user)
    }

}