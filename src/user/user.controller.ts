import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {User} from "./interfaces/user";
import {UserService} from "./user.service";

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

    @Put()
    async update(@Param('id') id: string ,@Body('user') user: User): Promise<User> {
        return this.userService.update(parseInt(id), user)
    }

}