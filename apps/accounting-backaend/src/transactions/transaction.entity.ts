import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../auth/user.entity';

@Entity({name:'transaction'})
export class TransactionEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true,length:11})
    uid: string;

    @Column()
    date: string;

    @Column()
    description: string;

    @ManyToOne(() => User, (user) => user.transactions, {eager:true})
    user: User;
}