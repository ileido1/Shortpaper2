/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { Doctor } from './doctos.entity';
import { CreateDoctorDto, PaginatioQueryDto, UpdateDoctorDto } from './dto';

@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorservice: DoctorsService) { }
    @Get()
    getDoctors(@Query() pagination: PaginatioQueryDto): Promise<Doctor[]> {
        return this.doctorservice.getDoctors(pagination);
    }
    @Get(':id')
    getDoctor(@Param('id') id: number): Promise<Doctor> {
        return this.doctorservice.getDoctor(id);
    }

    @Get('especialidad/:id_specialty')
    getDoctorbyspecialty(@Param('id_specialty') id_specialty: number): Promise<Doctor[]> {
        return this.doctorservice.getDoctorsbyspecialty(id_specialty);
    }


    @Post()
    createDoctor(@Body() name: CreateDoctorDto): Promise<Doctor> {
        return this.doctorservice.createDoctor(name);
    }
    @Patch(':id')
    updateDoctor(@Param('id') id: number, @Body() name: UpdateDoctorDto): Promise<Doctor> {
        return this.doctorservice.updateDoctor(id, name);
    }
    @Delete(':id')
    removeDoctor(@Param(':id') id: number): Promise<void> {
        return this.doctorservice.removeDoctor(id);
    }

}
