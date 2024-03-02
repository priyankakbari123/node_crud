import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import User from "./User";

@Entity('role')
export default class Role extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'id'
    })
    id!: number;

    @Column({ name: 'name' })
    name!: string;

    @Column({name:'permissions',type:'json'})
    permissions!:string

    @OneToMany(()=>User, user=>user.role)
    users:User[]

}
