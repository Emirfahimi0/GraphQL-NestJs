import { Field, ID, ObjectType } from "@nestjs/graphql";
import { statusType } from "./employee.entity";

@ObjectType("Employee")
export class EmployeeType {
	@Field(() => ID)
	id: string;

	@Field()
	firstName: string;

	@Field()
	lastName: string;

	@Field()
	age: number;

	@Field()
	status: statusType;
}
