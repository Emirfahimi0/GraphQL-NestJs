import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { EmployeeType } from "./employee.type";
import { EmployeeService } from "./employee.service";
import { CreateEmployeesInput } from "./create-employee.input";

@Resolver(() => EmployeeType)
export class EmployeeResolver {
	constructor(private employeeService: EmployeeService) {}

	@Mutation(() => EmployeeType)
	createEmployee(@Args("CreateEmployeesInput") createEmployeesInput: CreateEmployeesInput) {
		return this.employeeService.createEmployee(createEmployeesInput);
	}

	@Query(() => [EmployeeType])
	Employees() {
		return this, this.employeeService.getAllEmployees();
	}

	@Query(() => EmployeeType)
	employeeDetails(@Args("id") id: string) {
		return this.employeeService.getEmployee(id);
	}
}
