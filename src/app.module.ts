import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GraphQLModule } from "@nestjs/graphql";
import { JobsModule } from "./jobs/jobs.module";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Jobs } from "./jobs/job.entity";
import { EmployeeModule } from "./employee/employee.module";
import { Employee } from "./employee/employee.entity";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "mongodb",
			url: "mongodb://localhost/JobsFinder",
			synchronize: true,
			useUnifiedTopology: true,
			entities: [Jobs, Employee],
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
		}),
		JobsModule,
		EmployeeModule,
	],
})
export class AppModule {}
