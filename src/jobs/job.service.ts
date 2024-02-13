import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Jobs } from "./job.entity";
import { Repository } from "typeorm";
import { v4 as uuid } from "uuid";
import { CreateJobsInput } from "./job.input";

@Injectable()
export class JobsService {
	constructor(@InjectRepository(Jobs) private jobRepository: Repository<Jobs>) {}

	async createJobs(CreateJobsInput: CreateJobsInput): Promise<Jobs> {
		const { companyName, jobDescription, jobTitle } = CreateJobsInput;

		const job = this.jobRepository.create({
			id: uuid(),
			companyName,
			jobDescription,
			jobTitle,
		});

		return this.jobRepository.save(job);
	}

	async getJobsDetails(id: string): Promise<Jobs> {
		return this.jobRepository.findOne({ where: { id } });
	}

	async getAllJobs(): Promise<Jobs[]> {
		return this.jobRepository.find();
	}
}
