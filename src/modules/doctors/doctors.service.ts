/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specialty } from '../specialties/entities';
import { Doctor } from './doctos.entity';
import { CreateDoctorDto, PaginatioQueryDto, UpdateDoctorDto } from './dto';

@Injectable()
export class DoctorsService {
    constructor(
        @InjectRepository(Doctor) private readonly DoctorRepository: Repository<Doctor>,
        @InjectRepository(Specialty) private readonly SpecialtyRepository: Repository<Specialty>,) {

    }

    async getDoctors({ limit, offset, specialties }: PaginatioQueryDto): Promise<Doctor[]> {
        return await this.DoctorRepository.find({
            relations: ['specialties'],
            skip: offset,
            take: limit,
        });
    }

    async getDoctorsbyspecialty(id_specialty): Promise<Doctor[]> {
        const especialidad = this.SpecialtyRepository.findOne({ where: { id: id_specialty }, relations: ['doctors'] })
            ; return (await especialidad).doctors

    }

    async getDoctor(id: number): Promise<Doctor> {
        const doctor = await this.DoctorRepository.findOne({ where: { id: id }, relations: ['specialties'] })

        if (!doctor) {
            throw new NotFoundException
        }
        return doctor


    };


    async createDoctor({ name, last_name, specialties }: CreateDoctorDto) {
        const doctor: Doctor = this.DoctorRepository.create({ name, last_name, specialties });
        return this.DoctorRepository.save(doctor);
    }




    async updateDoctor(id: number, { name }: UpdateDoctorDto) {
        const doctor: Doctor = await this.DoctorRepository.preload({ id, name });

        if (!doctor) {
            throw new NotFoundException('Resource not found')
        }
        return doctor
    }


    async removeDoctor(id: number) {
        const doctor = await this.DoctorRepository.findOne({ where: { id: id } });
        if (!doctor) {
            throw new NotFoundException('Resource not found')
        }
        this.DoctorRepository.remove(doctor)

    }

}
