
import Faq from '../models/FaqModel.js';
import { StatusCodes } from "http-status-codes";


// CREATE FAQ
export const createFaq = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const faq = await Faq.create(req.body);

    res.status(StatusCodes.CREATED).json({ faq });
};


// GET FAQ
export const getFaq = async (req, res) => {
    const faq = await Faq.findById(req.params.id);

    res.status(StatusCodes.OK).json({ faq });
};


// GET ALL FAQS
export const getAllFaqs = async (req, res) => {

    const { search, sort } = req.query;

    // disable - so every user can see the FAQS
    const queryObject = {
        // createdBy: req.user.userId,
    };
    
    if (search) {
        queryObject.$or = [
            { title: { $regex: search, $options: 'i' } },
            { text: { $regex: search, $options: 'i' } },
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
    
    const faqs = await Faq.find(queryObject)
        .sort(sortKey)
        .skip(skip)
        .limit(limit);
    
    const totalFaqs = await Faq.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalFaqs / limit);
    
    res.status(StatusCodes.OK).json({ totalFaqs, numOfPages, currentPage: page, faqs });

};


// UPDATE FAQ
export const updateFaq = async (req, res) => {
    const updatedFaq = await Faq.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(StatusCodes.OK).json({msg: 'faq modified', faq: updatedFaq });
};

// DELETE FAQ
export const deleteFaq = async (req, res) => {
    const removedFaq = await Faq.findByIdAndDelete(req.params.id);

    res.status(StatusCodes.OK).json({msg: 'faq deleted', faq: removedFaq });
};

