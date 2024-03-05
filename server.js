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
// CLOUDINARY
import cloudinary from 'cloudinary';
// IMPORT HELMET
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
// MIDDLEWARERES
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';
// IMPORT COOKIE PARSER
import cookieParser from 'cookie-parser';
// ROUTERS
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js"
import userRouter from "./routes/userRouter.js"
// PUBLIC
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});


const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './client/dist')));
// SETUP COOKIE PARSER
app.use(cookieParser());
// SETUP THE MIDDLEWARE
app.use(express.json());
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                
                "media-src": ["'self'", "data:"],
                
                "default-src": ["'self'", "data:"],

                "script-src": ["'self'", "'unsafe-eval'", "'unsafe-inline'", "data:"],

                "img-src": ["'self'", "'unsafe-inline'", "data:"],

                "font-src": ["'self'", "'unsafe-inline'", "https://pro.fontawesome.com/", "https://fonts.gstatic.com/"],

                "connect-src": ["'self'", ],
                
                "frame-src": ["'self'", "https://youtube.com", "https://www.youtube.com"]
            }
    }
    })
);
app.use(mongoSanitize());


// API ROUTE
app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

// BUILD PROD
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});


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
            console.log(`SERVER running on PORT ${port}....`);
        });
    } catch (error) {
    console.log(error);
    process.exit(1);
}

