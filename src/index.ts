import { ReadWriteUsers } from "./read.write";
import { Validation } from "./middleware";

export const readWriteUsers = new ReadWriteUsers();

export const validate = new Validation();