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

  updateUsers(id: number, userUpdates: Partial<User>) {
    const users: User[] = getUsers();
    const userIdx = users.map((user) => user.id).indexOf(id);

    if (userIdx === -1) return null;

    users[userIdx] = { ...users[userIdx], ...userUpdates };

    writeUsers(users);

    return users[userIdx];
  },

  deleteUsers(id: number) {
    const users: User[] = getUsers();

    const user = users.find((user) => user.id === id);

    if (!user) return null;

    const usersPostDeletion = users.filter((user) => user.id !== id);

    writeUsers(usersPostDeletion);

    return user;
  },
};

function getUsers() {
  const usersJSON = fs.readFileSync("users.json", "utf-8");
  const users = JSON.parse(usersJSON);

  return users;
}

function writeUsers(users: User[]) {
  fs.writeFileSync("users.json", JSON.stringify(users, null, 4));
}
