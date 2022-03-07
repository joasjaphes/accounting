import { EntityRepository, Repository } from 'typeorm';
import { SignupDto } from './dto/signup.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    constructor() {
        super();
    };

    async signUp(signupDto: SignupDto): Promise<User> {
        const { firstName, surname, lastName, password } = signupDto;
        const user = new User();
        user.firstName = firstName;
        user.surname = surname;
        user.lastname = lastName;
        const salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password,salt); 
        user.salt = salt;       
        await user.save();
        return user;
    }

    async hashPassword(password: string, salt: string): Promise<string> {
        return await bcrypt.hash(password, salt);
    }
}