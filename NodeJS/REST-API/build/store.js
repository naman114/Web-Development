"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const fs = require("node:fs");
exports.store = {
    createUser(user) {
        const users = getUsers();
        const userToCreate = {
            id: users.length + 1,
            ...user,
        };
        users.push(userToCreate);
        writeUsers(users);
        return userToCreate;
    },
    readUser(id) {
        const users = getUsers();
        return users.find((user) => user.id === id);
    },
    updateUsers() { },
    deleteUsers() { },
};
function getUsers() {
    const usersJSON = fs.readFileSync("users.json", "utf-8");
    const users = JSON.parse(usersJSON);
    return users;
}
function writeUsers(users) {
    fs.writeFileSync("users.json", JSON.stringify(users, null, 4));
}
