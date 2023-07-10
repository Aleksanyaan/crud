"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const index_1 = require("../src/index");
class CreateUser {
    constructor(userService) {
        this.userService = userService;
    }
    create(req, res, next) {
        const userPayLoad = req.body;
        try {
            const result = this.userService.createUser(userPayLoad);
            const users = index_1.readWriteUsers.readUsers();
            users.push(result);
            index_1.readWriteUsers.writeUsers(users);
            res.status(201).send(result);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}
exports.CreateUser = CreateUser;
