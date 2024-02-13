import { Module } from "@nestjs/common";
import { JobResolver } from "./job.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JobsService } from "./job.service";
import { Jobs } from "./job.entity";

@Module({
	imports: [TypeOrmModule.forFeature([Jobs])],
	providers: [JobResolver, JobsService],
})
export class JobsModule {}
