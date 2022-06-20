import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialty } from '../specialties/entities';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { Doctor } from './doctos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Doctor, Specialty])],
    controllers: [DoctorsController],
    providers: [DoctorsService]
})
export class DoctorsModule {

}
