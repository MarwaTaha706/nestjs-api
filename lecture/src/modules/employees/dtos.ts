import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  salary: number;
}

export class UpdateEmployeeDto {
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  age?: number;

  @ApiProperty({ required: false })
  salary?: number;
}