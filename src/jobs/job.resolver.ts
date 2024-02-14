import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { JobType } from "./job.type";
import { JobsService } from "./job.service";
import { CreateJobsInput } from "./job.input";
import { CreateAssignJobInput } from "./assignEmployee.input";

@Resolver(() => JobType)
export class JobResolver {
	constructor(private jobService: JobsService) {}

	@Query(() => JobType)
	jobDetails(@Args("id") id: string) {
		return this.jobService.getJobsDetails(id);
	}

	@Query(() => [JobType])
	allJobDetails() {
		return this.jobService.getAllJobs();
	}

	@Mutation(() => JobType)
	createJobs(@Args("CreateJobsInput") createJobsInput: CreateJobsInput) {
		return this.jobService.createJobs(createJobsInput);
	}

	@Mutation(() => JobType)
	assignJob(@Args("createAssignJobInput") createAssignJobInput: CreateAssignJobInput) {
		const { candidate, jobId } = createAssignJobInput;
		return this.jobService.assignJobs(jobId, candidate);
	}
}
