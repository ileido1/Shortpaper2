
import { IsString } from "class-validator";
export class CreateDoctorDto {
    @IsString()
    readonly name: string;
}
