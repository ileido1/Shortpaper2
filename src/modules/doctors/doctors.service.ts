/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './doctos.entity';
import { CreateDoctorDto, UpdateDoctorDto } from './dto';

@Injectable()
export class DoctorsService {
    constructor(@InjectRepository(Doctor) private readonly DoctorRepository: Repository<Doctor>) {

    }

    async getDoctors(): Promise<Doctor[]> {
        return await this.DoctorRepository.find();
    }

    async getDoctor(id: number): Promise<Doctor> {
        const doctor = await this.DoctorRepository.findOne({ where: { id: id } })

        if (!doctor) {
            throw new NotFoundException
        }
        return doctor


    };
    async createDoctor({ name }: CreateDoctorDto) {
        const doctor = this.DoctorRepository.create({ name });
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
