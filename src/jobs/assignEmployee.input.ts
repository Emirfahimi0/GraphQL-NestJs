import { Field, ID, InputType } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class CreateAssignJobInput {
	@IsUUID()
	@Field(() => ID)
	jobId: string;

	@IsUUID("4", { each: true })
	@Field(() => [ID])
	candidate: string[];
}
