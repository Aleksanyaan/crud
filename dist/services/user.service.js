"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const users = [];
class UserService {
    createUser(userPayLoad) {
        const { name, age, gender, modifictionTime } = userPayLoad;
        const user = {
            id: Math.floor(Math.random() * 1000).toString(),
            name,
            age,
            gender,
            status: false,
            creationTime: new Date().toISOString(),
            modifictionTime,
        };
        users.push(user);
        return user;
    }
}
exports.UserService = UserService;
