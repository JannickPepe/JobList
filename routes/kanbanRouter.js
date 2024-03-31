import { Router } from 'express';
const router = Router();

import { getAllKanbans, getKanban, createKanban, updateKanban, deleteKanban, } from '../controllers/kanbanController.js';
import { validateKanbanInput, validateIdKanbanParam } from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

router.route('/').get(getAllKanbans).post(checkForTestUser, validateKanbanInput, createKanban);
router.route('/:id').get(validateIdKanbanParam, getKanban).patch(checkForTestUser, validateKanbanInput, validateIdKanbanParam, updateKanban).delete(checkForTestUser, validateIdKanbanParam, deleteKanban);

export default router;