import { type } from "os";
import { Column, CreateDateColumn, Entity, OneToMany, ManyToMany, JoinTable, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Specialty } from "../specialties/entities/specialty.entity";

@Entity()
export class Doctor {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    last_name: string;

    // @OneToMany(type => Specialty, specialty.doctor)
    // specialties: Specialty[];

    @ManyToMany(() => Specialty, specialty => specialty.doctors, { cascade: true })
    @JoinTable()
    specialties: Specialty[];

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}
