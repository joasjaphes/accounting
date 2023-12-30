import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true, nullable: false, length: 11})
    uid:string;
    @Column({nullable: false, length: 50})
    firstName:string;
    @Column({nullable: false, length: 50})
    surname:string;
    @Column({nullable: false, length: 50})
    email:string;
    @Column({nullable: false, length: 50})
    phoneNumber:string;
    @Column({nullable: false, length: 50, unique: true})
    username:string;
    @Column({nullable: false, length: 50})
    password:string;
    @Column({nullable: false, length: 50})
    salt:string;
    @Column({nullable: false, length: 50})
    role:string;
}