import mongoose from 'mongoose';
// EXPRESS VALIDATOR
import { body, param , validationResult } from 'express-validator';
import { BadRequestError, NotFoundError, UnauthorizedError } from '../errors/customErrors.js';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';
import Job from '../models/JobModel.js';
import Faq from '../models/FaqModel.js';
import User from '../models/UserModel.js';
import Kanban from '../models/KanbanModel.js';


//
const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);

                if (errorMessages[0].startsWith('no job')) {
                    throw new NotFoundError(errorMessages);
                }

                if (errorMessages[0].startsWith('no faq')) {
                    throw new NotFoundError(errorMessages);
                }

                if (errorMessages[0].startsWith('no kanban')) {
                    throw new NotFoundError(errorMessages);
                }

                if (errorMessages[0].startsWith('not authorized')) {
                    throw new UnauthorizedError('not authorized to access this route');
                }

                throw new BadRequestError(errorMessages);
            }
            next();
        },
    ];
};

//
export const validateJobInput = withValidationErrors([
    body('company').notEmpty().withMessage('company is required'),
    body('position').notEmpty().withMessage('position is required'),
    body('jobLocation').notEmpty().withMessage('job location is required'),
    body('jobStatus')
        .isIn(Object.values(JOB_STATUS))
        .withMessage('invalid status value'),
    body('jobType')
        .isIn(Object.values(JOB_TYPE))
        .withMessage('invalid job type'),
]);

//
export const validateFaqInput = withValidationErrors([
    body('title').notEmpty().withMessage('title is required'),
    body('text').notEmpty().withMessage('text is required'),
]);

//
export const validateKanbanInput = withValidationErrors([
    body('name').notEmpty().withMessage('name is required'),
    body('backlog').notEmpty().withMessage('backlog is required'),
    body('todo').notEmpty().withMessage('todo is required'),
    body('doing').notEmpty().withMessage('doing is required'),
    body('complete').notEmpty().withMessage('complete is required'),
]);

//
export const validateIdParam = withValidationErrors([
    param('id').custom(async (value, { req }) => {
        const isValidMongoId = mongoose.Types.ObjectId.isValid(value);

        if (!isValidMongoId) throw new BadRequestError('invalid MongoDB id');
        const job = await Job.findById(value);
        if (!job) throw new NotFoundError(`no job with id : ${value}`);

        const isAdmin = req.user.role === 'admin';
        const isOwner = req.user.userId === job.createdBy.toString()
        
        if(!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to access this route')
    }),
]);

//
export const validateIdFaqParam = withValidationErrors([
    param('id').custom(async (value, { req }) => {
        const isValidMongoId = mongoose.Types.ObjectId.isValid(value);


        if (!isValidMongoId) throw new BadRequestError('invalid MongoDB id');
        const faq = await Faq.findById(value);
        if (!faq) throw new NotFoundError(`no faq with id : ${value}`);

        const isAdmin = req.user.role === 'admin';
        const isOwner = req.user.userId === faq.createdBy.toString()
        
        if(!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to access this route')
    }),
]);

//
export const validateIdKanbanParam = withValidationErrors([
    param('id').custom(async (value, { req }) => {
        const isValidMongoId = mongoose.Types.ObjectId.isValid(value);


        if (!isValidMongoId) throw new BadRequestError('invalid MongoDB id');
        const kanban = await Kanban.findById(value);
        if (!kanban) throw new NotFoundError(`no kanban with id : ${value}`);

        const isAdmin = req.user.role === 'admin';
        const isOwner = req.user.userId === kanban.createdBy.toString()
        
        if(!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to access this route')
    }),
]);

//
export const validateRegisterInput = withValidationErrors([
    body('name').notEmpty().withMessage('name is required'),
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email format')
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) {
            throw new BadRequestError('email already exists');
            }
        }),
    body('password')
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 8 })
        .withMessage('password must be at least 8 characters long'),
    body('location').notEmpty().withMessage('location is required'),
    body('lastName').notEmpty().withMessage('last name is required'),
]);

//
export const validateLoginInput = withValidationErrors([
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email format'),
    body('password').notEmpty().withMessage('password is required'),
]);

//
export const validateUpdateUserInput = withValidationErrors([
    body('name').notEmpty().withMessage('name is required'),
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email format')
        .custom(async (email, { req }) => {
            const user = await User.findOne({ email });
            if (user && user._id.toString() !== req.user.userId) {
            throw new Error('email already exists');
            }
        }),
    body('lastName').notEmpty().withMessage('last name is required'),
    body('location').notEmpty().withMessage('location is required'),
]);