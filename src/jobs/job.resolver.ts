import { Query, Resolver } from "@nestjs/graphql";
import { JobType } from "./job.type";

@Resolver(() => JobType)
export class JobResolver {
	@Query(() => JobType)
	Jobs() {
		return {
			id: "sdiadjadjja",
			companyName: "SEEK Asia",
			jobDescription: "JSJFSJFJSFJSFJSJFJ",
			jobTitle: "React Native Developer",
		};
	}
}
