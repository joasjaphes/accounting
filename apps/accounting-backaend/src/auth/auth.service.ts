import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
    constructor(private userRepository:UserRepository) {}
    async signUp(signupDto:SignupDto):Promise<User> {
        return this.userRepository.signUp(signupDto);
    }
}
