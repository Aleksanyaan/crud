import express from 'express';
import { userRouter } from './router/user.router';
import { validate } from './src/index';


const app = express();
app.use(express.json());

app.use('/users', validate.validateApiKey, userRouter);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Our server is listening on port ${port}`);
})
