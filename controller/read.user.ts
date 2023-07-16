import { Request, Response, NextFunction } from 'express';
import { readWriteUsers } from "../src/index";

export class ReadUsers {
    read (req: Request, res: Response, next: NextFunction): void {
        const users = readWriteUsers.readUsers();
        res.send(users);
    }
}