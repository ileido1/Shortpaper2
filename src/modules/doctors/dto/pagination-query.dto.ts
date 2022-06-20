import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class PaginatioQueryDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    limit: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    offset: number;

    @IsString()
    @IsOptional()
    specialties: string;
}