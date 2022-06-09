
import { IsString } from "class-validator";
export class UpdateDoctorDto {
    @IsString()
    readonly name: string;
}

