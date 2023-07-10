import fs from 'fs';
import { IUser } from '../services/user.service';

export class ReadWriteUsers {
    readUsers() {
        const data = fs.readFileSync('users.json', {encoding:"utf8"});
        return JSON.parse(data);
    }
    
    writeUsers(users: IUser[]) {
        fs.writeFileSync('users.json', JSON.stringify(users));
    }
}