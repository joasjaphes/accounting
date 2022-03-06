import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService) {}
    @Post('signup')
    async signUp(@Body() signupDto:SignupDto) {
        console.log(signupDto);
        // return this.authService.signUp(signupDto);
    }

    @Post('signin')
    signIn() {
        return 'sign in'
    }
}
