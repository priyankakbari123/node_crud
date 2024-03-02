import {Entity, BaseEntity, Column, IntegerType, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import Role from "./Role";

@Entity('user')
export default class User extends BaseEntity{
    @PrimaryGeneratedColumn({
        name:'id'
    })
    id!:number;

    @Column({name:'name'})
    name!:string

    @Column({name:'username'})
    username!:string

    @Column({
        unique:true,
        name:'email'
    })
    email!:string

    @Column({
        name:'contact'
    })
    contactNo!:string

    @Column({name:'password'})
    password!:string

    @Column({name:'img_url'})
    imgUrl!:string

    @ManyToOne(() => Role, role=>role.users) // Many-to-one relationship with Role
    @JoinColumn({ name: 'role_id' }) // Foreign key column in the user table
    role!: Role;

    @CreateDateColumn({name:'created_at'})
    createdAt!:Date

    @UpdateDateColumn({name:'updated_at'})
    updatedAt!:Date

    @Column({name:'updated_by',nullable:true})
    updatedBy!:string

    @Column({name:'created_by'})
    createdBy!:string

    accessToken!:string

}