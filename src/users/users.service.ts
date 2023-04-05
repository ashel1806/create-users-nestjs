import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  createUser(user: CreateUserDto) {
    this.users.push(user);

    return {
      message: 'Usuario creado correctamente',
      user,
    };
  }
}
