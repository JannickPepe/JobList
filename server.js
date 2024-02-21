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
// ROUTERS
import jobRouter from "./routes/jobRouter.js";
// MIDDLEWARERES
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(morgan('dev'));

// SETUP THE MIDDLEWARE
app.use(express.json());

app.get('/', (req, res) => {

    res.send('Hello World');

});

app.post('/', (req, res) => {

    console.log(req);

    res.json({ message: 'Data received', data: req.body });
    
});

// API ROUTE
app.use('/api/v1/jobs', jobRouter);

// All the URL's with the * error 404
// the "not found" middleware is specifically designed to handle requests for non-existent routes
app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
});

// MiddleWare error for 500
// the "error" middleware is a catch-all for handling unexpected errors that occur during request processing.
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

