export interface IUser {
    id: string;
    name: string;
    age: number;
    gender: string;
    status: boolean;
    creationTime: string;
    modifictionTime: null;
}

interface IUserService {
    createUser: (payload: Omit<IUser, 'id' | 'status' | 'creationTime'>) => IUser;
}

const users: IUser[] = [];

export class UserService implements IUserService{
    createUser(userPayLoad: Omit<IUser, 'id' | 'status' | 'creationTime' | 'modifictionTime'>): IUser {
        const {name, age, gender} = userPayLoad;

        const user = {
            id: Math.floor(Math.random() * 1000).toString(),
            name,
            age,
            gender,
            status: false,
            creationTime: new Date().toISOString(),
            modifictionTime: null,
        };

        users.push(user);

        return user;
    }
}