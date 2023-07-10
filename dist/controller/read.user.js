"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadUsers = void 0;
const index_1 = require("../src/index");
class ReadUsers {
    read(req, res, next) {
        const users = index_1.readWriteUsers.readUsers();
        res.json(users);
    }
}
exports.ReadUsers = ReadUsers;
