import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../auth/user.entity';

@Entity()
export class TransactionEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    description: string;

    @ManyToOne(() => User, (user) => user.transaction, {eager:true})
    user: User;
}