import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dtos';
import { EmployeesService } from './employee.service';

@ApiTags('Employees endpoints')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly service: EmployeesService) {}

  @Get()
  getEmployees() {
    return this.service.getEmployees();
  }

  @Get('highest-paid')
  getHighestPaidEmployee() {
    return this.service.getHighestPaidEmployee();
  }

  @Get(':id')
  getEmployeeById(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.service.getEmployeeById(id);
  }

  @Post()
  addEmployee(@Body() data: CreateEmployeeDto) {
    return this.service.addEmployee(data);
  }

  @Patch(':id')
  updateEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateEmployeeDto,
  ) {
    return this.service.updateEmployee(id, data);
  }

  @Delete(':id')
  deleteEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.service.deleteEmployee(id);
  }
}
