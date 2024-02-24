// SETUP EXPRESS ASYNC ERRORS
import 'express-async-errors';
// SETUP DOTENV
import * as dotenv from 'dotenv';
dotenv.config();
// SETUP EXPRESS
import express from 'express';
const app = express();
// SETUP MORGAN
import morgan from 'morgan';
// SETUP MONGOOSE
import mongoose from 'mongoose';
// MIDDLEWARERES
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';
// IMPORT COOKIE PARSER
import cookieParser from 'cookie-parser';
// ROUTERS
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js"
import userRouter from "./routes/userRouter.js"


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// SETUP COOKIE PARSER
app.use(cookieParser());
// SETUP THE MIDDLEWARE
app.use(express.json());

app.get('/', (req, res) => {

    res.send('Hello World');

});

// TEST API ROUTE
app.get('/api/v1/test', (req, res) => {
    res.json({ msg: 'test route' });
});

// API ROUTE
app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);


// All the URL's with the * error 404 - the "not found" middleware is specifically designed to handle requests for non-existent routes
app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
});

// MiddleWare error for 500 - the "error" middleware is a catch-all for handling unexpected errors that occur during request processing.
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

// MONGOOSE TRY CATCH
try {
        await mongoose.connect(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`server running on PORT ${port}....`);
        });
    } catch (error) {
    console.log(error);
    process.exit(1);
}

