"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadWriteUsers = void 0;
const fs_1 = __importDefault(require("fs"));
class ReadWriteUsers {
    readUsers() {
        const data = fs_1.default.readFileSync('users.json', { encoding: "utf8" });
        return JSON.parse(data);
    }
    writeUsers(users) {
        fs_1.default.writeFileSync('users.json', JSON.stringify(users));
    }
}
exports.ReadWriteUsers = ReadWriteUsers;
