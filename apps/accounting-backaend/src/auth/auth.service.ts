import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
    constructor(private userRepository:UserRepository, private jwtService:JwtService) {}
    async signUp(signupDto:SignupDto):Promise<User> {
        return this.userRepository.signUp(signupDto);
    }

    async signIn(signInDto: SignInDto) {
        const {username, password} = signInDto;
        const refUser = await this.userRepository.findOne({username});
        if(refUser === null || refUser === undefined) {
            throw new UnauthorizedException('Wrong username');
        }else if(!(await refUser.validatePassword(password))) {
            throw new UnauthorizedException('Wrong password');
        }else {
            const payload = {username};
            const accesstoken = await this.jwtService.sign(payload);
            return {accesstoken};
        }        
    }
}
