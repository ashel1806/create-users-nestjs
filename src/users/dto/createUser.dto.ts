import {
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  Length,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 50)
  @Matches(/^[A-Za-z\s]*$/)
  nombres: string;

  @IsNotEmpty()
  @Length(3, 50)
  @Matches(/^[A-Za-z\s]*$/)
  apellidos: string;

  @IsNotEmpty()
  @Length(8, 9)
  @IsNumberString()
  dni: string;

  @IsInt()
  @IsOptional()
  @Min(14)
  @Max(99)
  edad: number;
}
