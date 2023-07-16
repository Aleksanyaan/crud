"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = require("./router/user.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const validateApiKey = (req, res, next) => {
    const apiKey = req.headers.apikey;
    if (apiKey && apiKey === '123') {
        next();
    }
    else {
        res.status(401).send('Invalid Key');
    }
};
app.use('/users', validateApiKey, user_router_1.userRouter);
app.use('/users/:id', validateApiKey, user_router_1.userRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Our server is listening on port ${port}`);
});
