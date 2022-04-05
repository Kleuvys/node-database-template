import express from 'express';

import { getAllGroceries } from '../controllers/grocery';

const router = express.Router();

router.get('/', getAllGroceries);

export default router;