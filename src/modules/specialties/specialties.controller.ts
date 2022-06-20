/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { Specialty } from './entities';
import { SpecialtiesService } from './specialties.service';

@Controller('Specialties')
export class SpecialtiesController {
    constructor(private readonly doctorservice: SpecialtiesService) { }
    @Get()
    getDoctors(): Promise<Specialty[]> {
        return this.doctorservice.getSpecialties();
    }
}
