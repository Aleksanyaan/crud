import { UserService } from "../services/user.service";
import { Request, Response, NextFunction } from 'express';
import { readWriteUsers } from "../src/index";


export class CreateUser {
    constructor(private userService: UserService) {}

    create(req: Request, res: Response, next: NextFunction): void {
        const userPayLoad = req.body;

        try {
          const result = this.userService.createUser(userPayLoad);
            const users = readWriteUsers.readUsers();
            users.push(result);
            readWriteUsers.writeUsers(users);
          res.status(201).send(result);

        } catch (err) {
          res.status(500).json({ error: (err as Error).message });
        }
    }
}