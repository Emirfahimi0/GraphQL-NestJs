import { Module } from "@nestjs/common";
import { JobResolver } from "./job.resolver";

@Module({
	providers: [JobResolver],
})
export class JobsModule {}
