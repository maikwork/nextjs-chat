import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}
    async createUser(dto: CreateUserDTO) {
        const user = await this.userRepository.create(dto)
        return user
    }

    async getAllUser() {
        const user = await this.userRepository.findAll()
        return user
    }
}
