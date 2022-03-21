import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post('signup')
    async signUp(@Body() signupDto: SignupDto) {
        return this.authService.signUp(signupDto);
    }

    @Post('signin')
    signIn(@Body() signinDto: SignInDto) {
        return this.authService.signIn(signinDto);
    }
}
