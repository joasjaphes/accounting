import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('signup')
    signUp() {
        return 'Signing up'
    }

    @Post('signin')
    signIn() {
        return 'sign in'
    }
}
