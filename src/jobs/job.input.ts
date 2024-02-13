import { Field, InputType } from "@nestjs/graphql";

import { MinLength } from "class-validator";

@InputType()
export class CreateJobsInput {
	@MinLength(5)
	@Field()
	jobTitle: string;

	@Field()
	companyName: string;

	@Field()
	jobDescription: string;
}
