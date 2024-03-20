import { Router } from 'express';
const router = Router();

import { getAllFaqs, getFaq, createFaq, updateFaq, deleteFaq, } from '../controllers/faqController.js';
import { validateFaqInput, validateIdFaqParam } from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

// router.get('/', getAllJobs);
// router.post('/', createJob);

router.route('/').get(getAllFaqs).post(checkForTestUser, validateFaqInput, createFaq);
router.route('/:id').get(validateIdFaqParam, getFaq).patch(checkForTestUser, validateFaqInput, validateIdFaqParam, updateFaq).delete(checkForTestUser, validateIdFaqParam, deleteFaq);

export default router;