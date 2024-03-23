import { Router } from 'express';
const router = Router();

import { getAllFaqs, } from '../controllers/faqController.js';


router.route('/').get(getAllFaqs)


export default router;