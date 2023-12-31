import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

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
  @OneToMany(() => User, (user) => user.company) users: User[];
}
