import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserDTO } from './user.dto';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CredentialDTO } from './credentials.dto';
@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async createUser(userObject: UserDTO): Promise<User> {
    try {
      const userPayload: User = await this.getUserPayloadFromDTO(userObject);
      const createdUser: User = await this.repository.save(userPayload);
      Logger.log('User Created: ' + JSON.stringify(createdUser));
      return createdUser;
    } catch (e) {
      console.error(e);
      Logger.error('Failed to create user', e);
      throw e;
    }
  }

  async getAllUsers(): Promise<UserDTO[]> {
    try {
      const users: User[] = await this.repository.find();
      return users.map((user) => this.getUserDTOFromUSer(user));
    } catch (e) {
      console.error('Failed to get users', e);
      Logger.error('Failed to get users', e);
      throw e;
    }
  }

  async login(credentials: CredentialDTO): Promise<CredentialDTO> {
    try {
      const { username, password } = credentials;
      const hashedPassword = await this.getHashedPassword(password);
      return await this.repository.findOne({
        where: { username, password: hashedPassword.password },
      });
    } catch (e) {
      Logger.error('Failed to login', e);
      throw new UnauthorizedException({
        message: 'Wrong credentials provided',
      });
    }
  }

  async getHashedPassword(
    password: string
  ): Promise<{ password: string; salt: string }> {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      return { password: hashedPassword, salt: salt };
    } catch (e) {
      console.error(e);
      Logger.error('Failed to hash password', e);
      throw e;
    }
  }

  async getUserPayloadFromDTO(user: UserDTO): Promise<User> {
    try {
      const hashedPassword = await this.getHashedPassword(user.password);
      const userPayload: User = this.repository.create();
      userPayload.uid = user.id;
      userPayload.firstName = user.firstName;
      userPayload.surname = user.surname;
      userPayload.email = user.email;
      userPayload.phoneNumber = user.phoneNumber;
      userPayload.username = user.username;
      userPayload.password = hashedPassword.password;
      userPayload.salt = hashedPassword.salt;
      userPayload.role = user.role;
      return userPayload;
    } catch (e) {
      console.error(e);
      Logger.error('Failed to get user payload from DTO', e);
      throw e;
    }
  }

  getUserDTOFromUSer(user: User): UserDTO {
    return {
      id: user.uid,
      firstName: user.firstName,
      surname: user.surname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      username: user.username,
    };
  }
}
