import { Field, ID, ObjectType } from "@nestjs/graphql";
import { EmployeeType } from "src/employee/employee.type";

@ObjectType("Jobs")
export class JobType {
	@Field(() => ID)
	id: string;

	@Field()
	jobTitle: string;

	@Field()
	companyName: string;

	@Field()
	jobDescription: string;

	@Field(() => [EmployeeType])
	candidates: string[];
}
