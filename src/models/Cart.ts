import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cart')
export default class Cart extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'id'
    })
    id!: number;

    @Column({ name: 'unique_id' })
    uniqueId!: string;

}