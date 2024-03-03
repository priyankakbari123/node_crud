import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('banner')
export default class Banner extends BaseEntity{
    @PrimaryGeneratedColumn({
        name:'id'
    })
    id!:number

    @Column({name:'img_name'})
    imgName!:string

    @Column({name:'img_url'})
    imgUrl!:string

    @Column({name:'order'})
    order!:number

    @Column({name:'status'})
    status!:string

    @Column({name:'redirect_url'})
    redirectUrl!:string

    @CreateDateColumn({name:'created_at'})
    createdAt!:Date

    @UpdateDateColumn({name:'updated_at'})
    updatedAt!:Date
    
    @Column({name:'created_by'})
    createdBy!:string

    @Column({name:'updated_by',default:""})
    updatedBy!:string

}