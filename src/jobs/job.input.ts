import { Field, ID, InputType } from "@nestjs/graphql";

import { IsUUID, MinLength } from "class-validator";

@InputType()
export class CreateJobsInput {
	@MinLength(5)
	@Field()
	jobTitle: string;

	@Field()
	companyName: string;

	@Field()
	jobDescription: string;

	@IsUUID("4", { each: true })
	@Field(() => [ID], { defaultValue: [] })
	candidates: string[];
}
