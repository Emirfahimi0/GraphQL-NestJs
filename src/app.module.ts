import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GraphQLModule } from "@nestjs/graphql";
import { JobsModule } from "./jobs/jobs.module";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Jobs } from "./jobs/job.entity";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "mongodb",
			url: "mongodb://localhost/JobsFinder",
			synchronize: true,
			useUnifiedTopology: true,
			entities: [Jobs],
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
		}),
		JobsModule,
	],
})
export class AppModule {}
