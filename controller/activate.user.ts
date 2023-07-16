import { Request, Response, NextFunction } from 'express';
import { readWriteUsers } from "../src/index";

export class ActivateUser {
    activate(req: Request, res: Response, next: NextFunction): void  {
        const { id } = req.params;

        const users = readWriteUsers.readUsers();
        const user = users.find((u: { id: string }) => u.id === id);

        if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            user.status = true;
            user.modifictionTime = new Date().toISOString();
            readWriteUsers.writeUsers(users);
            res.send(`User activated: ${JSON.stringify(user)}`);
        }
    }
}