import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "Pedro",
    email: "pedro@example.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Jason",
    email: "jason@example.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Barbara",
    email: "barabara@example.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users;
