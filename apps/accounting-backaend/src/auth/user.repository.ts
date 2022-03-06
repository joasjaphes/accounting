import { EntityRepository, Repository } from 'typeorm';
import { SignupDto } from './dto/signup.dto';
import { User } from './user.entity';

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
        user.password = password;
        await user.save();
        return user;
    }
}