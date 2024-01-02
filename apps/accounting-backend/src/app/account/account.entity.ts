import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from '../company/company.entity';

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, length: 11, nullable: false })
  uid: string;
  @Column({ nullable: false, unique: true })
  name: string;
  @Column()
  description: string;
  @Column({ nullable: false })
  type: string;
  @ManyToOne(() => Company, (company) => company.accounts)
  company: Company;
}
