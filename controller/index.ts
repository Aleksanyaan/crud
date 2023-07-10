import { CreateUser } from "./create.user";
import { userService } from "../services/index";
import { ReadUsers } from "./read.user";
import { DeleteUsers } from "./delete.user";

export const createUser = new CreateUser(userService);

export const readUsers = new ReadUsers();

export const deleteUsers = new DeleteUsers();