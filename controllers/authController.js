import { StatusCodes } from 'http-status-codes';
import { hashPassword } from '../utils/passwordUtils.js';
import User from '../models/UserModel.js';

//
export const register = async (req, res) => {
    // first registered user is an admin
    const isFirstAccount = (await User.countDocuments()) === 0;
    req.body.role = isFirstAccount ? 'admin' : 'user';

    // From our passwordUtils.js
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

//
export const login = async (req, res) => {
    res.send('login');
};