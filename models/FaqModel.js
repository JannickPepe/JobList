import mongoose from 'mongoose';


const FaqSchema = new mongoose.Schema(
    {
        title: String,
        text: String,
        createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        },
    },
    { timestamps: true }
);

export default mongoose.model('Faq', FaqSchema);