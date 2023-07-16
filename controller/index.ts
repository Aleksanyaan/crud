import { CreateUser } from "./create.user";
import { userService } from "../services/index";
import { ReadUsers } from "./read.user";
import { DeleteUser } from "./delete.user";
import { UpdateUser } from "./update.user";
import { ActivateUser } from "./activate.user";

export const createUser = new CreateUser(userService);

export const readUsers = new ReadUsers();

export const deleteUser = new DeleteUser();

export const updateUser = new UpdateUser();

export const activateUser = new ActivateUser();