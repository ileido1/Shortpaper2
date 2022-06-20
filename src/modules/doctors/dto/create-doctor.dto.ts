
import { IsArray, IsObject, IsString } from "class-validator";
import { Specialty } from "src/modules/specialties/entities";
export class CreateDoctorDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly last_name: string;

    @IsArray()
    readonly specialties: Specialty[];
}
