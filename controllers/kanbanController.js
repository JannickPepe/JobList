
import Kanban from '../models/KanbanModel.js';
import { StatusCodes } from "http-status-codes";
import mongoose from 'mongoose';
import day from 'dayjs';


// GET ALL KANBANS
export const getAllKanbans = async (req, res) => {

    const { search, sort } = req.query;

    const queryObject = {
        createdBy: req.user.userId,
    };
    
    if (search) {
        queryObject.$or = [
            { name: { $regex: search, $options: 'i' } },
            { backlog: { $regex: search, $options: 'i' } },
            { todo: { $regex: search, $options: 'i' } },
            { doing: { $regex: search, $options: 'i' } },
            { complete: { $regex: search, $options: 'i' } },
        ];
    }
    
    const sortOptions = {
        newest: '-createdAt',
        oldest: 'createdAt',
        'a-z': 'position',
        'z-a': '-position',
    };
    
    const sortKey = sortOptions[sort] || sortOptions.newest;
    
    // setup pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const kanbans = await Kanban.find(queryObject)
        .sort(sortKey)
        .skip(skip)
        .limit(limit);
    
    const totalKanbans = await Kanban.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalKanbans / limit);
    
    res.status(StatusCodes.OK).json({ totalKanbans, numOfPages, currentPage: page, kanbans });

};

// CREATE KANBAN
export const createKanban = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const kanban = await Kanban.create(req.body);

    res.status(StatusCodes.CREATED).json({ kanban });
};

// GET KANBAN
export const getKanban = async (req, res) => {
    const kanban = await Kanban.findById(req.params.id);

    res.status(StatusCodes.OK).json({ kanban });
};

// UPDATE KANBAN
export const updateKanban = async (req, res) => {
    const updatedKanban = await Kanban.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(StatusCodes.OK).json({msg: 'kanban modified', kanban: updatedKanban });
};

// DELETE Kanban
export const deleteKanban = async (req, res) => {
    const removedKanban = await Kanban.findByIdAndDelete(req.params.id);

    res.status(StatusCodes.OK).json({msg: 'kanban deleted', kanban: removedKanban });
};

