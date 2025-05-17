import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dtos';

@Injectable()
export class EmployeesService {
  private employees = [
    { id: 1, name: 'Omar', age: 18, salary: 3000 },
    { id: 2, name: 'Sara', age: 19, salary: 3500 },
    { id: 3, name: 'Mohamed', age: 21, salary: 4000 },
    { id: 4, name: 'Yara', age: 22, salary: 4500 },
  ];

  getEmployees() {
    return this.employees;
  }

  getEmployeeById(id: number) {
    const employee = this.employees.find(e => e.id === id);
    if (!employee) throw new Error('Employee not found');
    return employee;
  }

  addEmployee(data: CreateEmployeeDto) {
    const newEmployee = {
      id: this.employees.length + 1,
      ...data,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  updateEmployee(id: number, data: UpdateEmployeeDto) {
    const index = this.employees.findIndex(e => e.id === id);
    if (index === -1) throw new Error('Employee not found');

    this.employees[index] = { ...this.employees[index], ...data };
    return this.employees[index];
  }

  deleteEmployee(id: number) {
    const index = this.employees.findIndex(e => e.id === id);
    if (index === -1) throw new Error('Employee not found');

    const deleted = this.employees.splice(index, 1);
    return deleted[0];
  }

  getHighestPaidEmployee() {
    return this.employees.reduce((prev, current) =>
      current.salary > prev.salary ? current : prev,
    );
  }
}
