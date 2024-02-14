import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "./employee.entity";
import { v4 as uuid } from "uuid";
import { Repository } from "typeorm";
import { CreateEmployeesInput } from "./create-employee.input";

@Injectable()
export class EmployeeService {
	constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>) {}

	async createEmployee(CreateEmployeesInput: CreateEmployeesInput): Promise<Employee> {
		const { firstName, lastName, age, status } = CreateEmployeesInput;

		const employee = this.employeeRepository.create({
			id: uuid(),
			firstName,
			lastName,
			age,
			status,
		});

		return this.employeeRepository.save(employee);
	}

	async getAllEmployees(): Promise<Employee[]> {
		return this.employeeRepository.find();
	}
	async getEmployee(id: string): Promise<Employee> {
		return this.employeeRepository.findOne({ where: { id } });
	}
}
