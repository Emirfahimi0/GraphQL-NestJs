import { Field, InputType } from "@nestjs/graphql";
import { MinLength } from "class-validator";
import { statusType } from "./employee.entity";

@InputType()
export class CreateEmployeesInput {
	@MinLength(2)
	@Field()
	firstName: string;

	@MinLength(2)
	@Field()
	lastName: string;

	@Field()
	age: number;

	@Field()
	status: statusType;
}
