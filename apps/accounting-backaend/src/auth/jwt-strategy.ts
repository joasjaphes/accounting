import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload';
import { UserRepository } from './user.repository';

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UserRepository) private userRepository: UserRepository,
      ) {
        super({
          secretOrKey: 'topSecret51',
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
      }
    
      async validate(payload: JwtPayload) {
        const { username } = payload;
        const user = await this.userRepository.findOne({ username });
        if (!user) {
          throw new UnauthorizedException();
        }
        return user;
      }
}