import { Request, Response, NextFunction } from 'express';
import { readWriteUsers } from "../src/index";
import { IUser } from '../services/user.service';

export class DeleteUsers {
    delete (req: Request, res: Response, next: NextFunction): void {

        let id: string;
        if(req.url.startsWith('/users/')) {
            id = req.url.split('/')[2];
        }

        const users = readWriteUsers.readUsers();
        const userIndex = users.findIndex((u: { id: string }) => u.id === id);

        if (userIndex === -1) {
            res.status(404).json({ error: 'User not found' });
        } else {
            users.splice(userIndex, 1);
            readWriteUsers.writeUsers(users);
            res.sendStatus(204);
        }
    }
}