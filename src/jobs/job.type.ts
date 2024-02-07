import { Field, ID, ObjectType } from "@nestjs/graphql";

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
}
