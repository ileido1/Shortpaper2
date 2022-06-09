/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { Doctor } from './doctos.entity';
import { CreateDoctorDto, UpdateDoctorDto } from './dto';

@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorservice: DoctorsService) { }
    @Get()
    getDoctors(@Query() filterQurey): Promise<Doctor[]> {
        const { name, especialidad } = filterQurey;
        return this.doctorservice.getDoctors();
    }
    @Get(':id')
    getDoctor(@Param('id') id: number): Promise<Doctor> {
        return this.doctorservice.getDoctor(id);
    }

    @Post()
    createDoctor(@Body() name: CreateDoctorDto): Promise<Doctor> {
        console.log(name instanceof CreateDoctorDto)
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
