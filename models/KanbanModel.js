import mongoose from 'mongoose';

const KanbanSchema = new mongoose.Schema(
    {
        backlog: String,
        todo: String,
        doing: String,
        complete: String,
        createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        },
    },
    { timestamps: true }
);

export default mongoose.model('Kanban', KanbanSchema);