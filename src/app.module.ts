import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DoctorsModule } from './modules/doctors/doctors.module';
import { SpecialtiesModule } from './modules/specialties/specialties.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appendFile } from 'fs';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DoctorsModule, TypeOrmModule.forRoot({
      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'Heroku Postgres',
      // password: 'my-weak-password',
      // database: 'postgres',
      // autoLoadEntities: true,
      // synchronize: true

      type: 'postgres',
      host: 'ec2-23-23-182-238.compute-1.amazonaws.com',
      port: 5432,
      username: 'xndqjgfouaonzs',
      password: 'ee78b63f31fd3f278118a72809e600edd7cf037c465939f0b1a1d87def16810b',
      database: 'dcloinfseo6j7n',
      autoLoadEntities: true,
      synchronize: true

    }), SpecialtiesModule, DatabaseModule],
})
export class AppModule {


}
