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
        const { firstName, surname, lastName, password, username } = signupDto;
        const user = new User();
        user.firstName = firstName;
        user.surname = surname;
        user.lastname = lastName;
        user.username = username;
        const salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password,salt); 
        user.salt = salt;       
        await user.save();
        return user;
    }

    async signIn(username:string) {
        const refUser = await this.findOne({username})
    }   

    async hashPassword(password: string, salt: string): Promise<string> {
        return await bcrypt.hash(password, salt);
    }
}