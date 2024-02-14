import { Module } from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "./employee.entity";
import { EmployeeResolver } from "./employee.resolver";

@Module({
	imports: [TypeOrmModule.forFeature([Employee])],
	providers: [EmployeeResolver, EmployeeService],
})
export class EmployeeModule {}
