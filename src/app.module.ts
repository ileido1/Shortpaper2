import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DoctorsModule } from './modules/doctors/doctors.module';

@Module({
  imports: [DoctorsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'my-weak-password',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true

  })],
})
export class AppModule { }