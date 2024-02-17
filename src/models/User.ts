import {Entity, BaseEntity, Column, IntegerType, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('user')
export default class User extends BaseEntity{
    @PrimaryGeneratedColumn({
        name:'id'
    })
    id!:number;

    @Column({name:'name'})
    name!:string

    @Column({
        unique:true,
        name:'email'
    })
    email!:string

    @CreateDateColumn({name:'created_at'})
    createdAt!:Date

    @UpdateDateColumn({name:'updated_at'})
    updatedAt!:Date

    @Column({name:'updated_by'})
    updatedBy!:string

    pwd!:string

}