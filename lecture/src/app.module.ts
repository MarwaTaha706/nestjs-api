import { Module } from '@nestjs/common';
import { EmployeesModule } from './modules/employees/employee.module';

@Module({
  imports: [EmployeesModule],
})
export class AppModule {}
