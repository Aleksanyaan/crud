"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUsers = void 0;
const index_1 = require("../src/index");
class DeleteUsers {
    delete(req, res, next) {
        let id;
        if (req.url.startsWith('/users/')) {
            id = req.url.split('/')[2];
        }
        const users = index_1.readWriteUsers.readUsers();
        const userIndex = users.findIndex((u) => u.id === id);
        if (userIndex === -1) {
            res.status(404).json({ error: 'User not found' });
        }
        else {
            users.splice(userIndex, 1);
            index_1.readWriteUsers.writeUsers(users);
            res.sendStatus(204);
        }
    }
}
exports.DeleteUsers = DeleteUsers;
