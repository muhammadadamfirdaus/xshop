import bcrypt from "bcryptjs";

const users = [
	{
		name: "Admin User",
		email: "admin@example.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		name: "Joko",
		email: "joko@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		name: "Anwar",
		email: "anwar@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
];

export default users;
