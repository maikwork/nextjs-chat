import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    create(@Body() userDTO: CreateUserDTO) {
        console.log(userDTO)
        return this.userService.createUser(userDTO)
    }

    @Get()
    findAll() {
        return this.userService.getAllUser()
    }

}
