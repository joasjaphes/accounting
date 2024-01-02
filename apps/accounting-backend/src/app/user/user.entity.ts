import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from '../company/company.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, nullable: false, length: 11 })
  uid: string;
  @Column({ nullable: false, length: 50 })
  firstName: string;
  @Column({ nullable: false, length: 50 })
  surname: string;
  @Column({ nullable: false, length: 50 })
  email: string;
  @Column({ nullable: false, length: 50,unique: true })
  phoneNumber: string;
  @Column({ nullable: false, length: 50 })
  username: string;
  @Column({ nullable: false})
  password: string;
  @Column({ nullable: false})
  salt: string;
  @Column({ nullable: false, length: 50 })
  role: string;
  @ManyToOne(() => Company, (company) => company.users, { eager: true })
  company: Company;
}
