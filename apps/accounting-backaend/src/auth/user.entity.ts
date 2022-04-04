import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    firstName: string;

    @Column()
    surname: string;

    @Column()
    lastname: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    async validatePassword(password: string) {
        const hash = await bcrypt.hash(password, this.salt);
        if (hash === this.password) {
            return true;
        } else {
            throw new UnauthorizedException('Wrong Password');
        }
    }

    static async authenticateUser(username: string, password: string) {
        const user = await this.findOne({ username });
        if (user) {
            return await user.validatePassword(password);
        } else {
            throw new UnauthorizedException('Wrong Username');
        }
    }
}