import { Request, Response, NextFunction } from 'express';
import { readWriteUsers } from "../src/index";

export class DeleteUser {
    delete (req: Request, res: Response, next: NextFunction): void {

        const { id } = req.params;

        const users = readWriteUsers.readUsers();
        const userIndex = users.findIndex((u: { id: string }) => u.id === id);

        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            res.send('User succesfully deleted');
            readWriteUsers.writeUsers(users);
            res.sendStatus(204);
        } else {
            res.status(404).send({ error: 'User not found' });
        }
    }
}