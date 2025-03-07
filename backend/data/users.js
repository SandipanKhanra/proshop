import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Nitai",
    email: "nitai@gmail.com",
    password: bcrypt.hashSync("nitai@108", 10),
    isAdmin: false,
  },
  {
    name: "Gauranga",
    email: "gauranga@gmail.com",
    password: bcrypt.hashSync("gauranga@108", 10),
    isAdmin: false,
  },
];

export default users;
