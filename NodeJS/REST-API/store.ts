const fs = require("node:fs");

import { User } from "./types";

export const store = {
  createUser(user: Omit<User, "id">) {
    const users = getUsers();

    const userToCreate: User = {
      id: users.length + 1,
      ...user,
    };

    users.push(userToCreate);

    writeUsers(users);

    return userToCreate;
  },
  readUser(id: number) {
    const users: User[] = getUsers();
    return users.find((user) => user.id === id);
  },
  updateUsers() {},
  deleteUsers() {},
};

function getUsers() {
  const usersJSON = fs.readFileSync("users.json", "utf-8");
  const users = JSON.parse(usersJSON);

  return users;
}

function writeUsers(users: User[]) {
  fs.writeFileSync("users.json", JSON.stringify(users, null, 4));
}
