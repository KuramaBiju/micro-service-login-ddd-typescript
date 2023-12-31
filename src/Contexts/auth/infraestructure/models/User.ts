import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
	timestamps: false,
	tableName: "users",
})
export class User extends Model {
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	email!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	password!: string;
}
