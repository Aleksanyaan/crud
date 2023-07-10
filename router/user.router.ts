import express from "express";
import { Request, Response, NextFunction } from 'express';
import { createUser, deleteUsers } from "../controller/index";
import { readUsers } from "../controller/index";


const userRouter = express.Router();

userRouter.post('/', (req: Request, res: Response, next: NextFunction) => createUser.create(req, res, next));

userRouter.get('/', (req: Request, res: Response, next: NextFunction) => readUsers.read(req, res, next));

userRouter.delete('/', (req: Request, res: Response, next: NextFunction) => deleteUsers.delete(req, res, next));

export { userRouter };