import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username:string;

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
        return hash === this.password;
    }
}