import { Request, Response, NextFunction } from 'express';
import { readWriteUsers } from "../src/index";

export class UpdateUser {
    update(req: Request, res: Response, next: NextFunction): void  {
        const { id } = req.params;
        const { name, age, gender } = req.body;

        const users = readWriteUsers.readUsers();
        const user = users.find((u: { id: string }) => u.id === id);

        if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            user.name = name;
            user.age = age;
            user.gender = gender;
            user.modifictionTime = new Date().toISOString();
            readWriteUsers.writeUsers(users);
            res.send(`User updated: ${JSON.stringify(user)}`);
        }
    }
}