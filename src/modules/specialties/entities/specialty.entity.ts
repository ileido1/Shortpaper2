import { Doctor } from "src/modules/doctors/doctos.entity";
import { Column, Entity, JoinColumn, ManyToOne, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Specialty {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ nullable: false })
    nombre_especialidad: string;

    @ManyToMany(() => Doctor, doctor => doctor.specialties)
    doctors: Doctor[];
}