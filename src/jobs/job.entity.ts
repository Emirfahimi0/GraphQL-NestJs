import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Jobs {
	@ObjectIdColumn()
	_id: string;
	@PrimaryColumn()
	id: string;
	@Column()
	companyName: string;
	@Column()
	jobDescription: string;
	@Column()
	jobTitle: string;
}
