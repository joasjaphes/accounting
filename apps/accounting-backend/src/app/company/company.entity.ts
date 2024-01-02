import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Account } from '../account/account.entity';

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 11, unique: true, nullable: false })
  uid: string;
  @Column({ nullable: false })
  name: string;
  @Column()
  description: string;
  @Column()
  address: string;
  @OneToMany(() => User, (user) => user.company)
  users: User[];
  @OneToMany(() => Account, (account) => account.company)
  accounts: Account[];
}
