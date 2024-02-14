import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

export type statusType = "Fresh Graduate" | "Experienced" | "FreeLancer";

@Entity()
export class Employee {
	@ObjectIdColumn()
	_id: string;

	@PrimaryColumn()
	id: string;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	age: number;

	@Column()
	status: statusType;
}
