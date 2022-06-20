/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specialty } from '../specialties/entities';


@Injectable()
export class SpecialtiesService {
    constructor(
        @InjectRepository(Specialty) private readonly SpecialtyRepository: Repository<Specialty>,) {
    }
    async getSpecialties(): Promise<Specialty[]> {
        return await this.SpecialtyRepository.find({
        });
    }

}
