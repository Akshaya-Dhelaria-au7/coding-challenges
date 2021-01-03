import express from 'express';
import control from '../controllers/controller.js'
import valid from '../middleware/middleware.js';

const router = new express.Router();

router.get('/list', control.getAll);
router.get('/list/:id', control.getOne);
router.post('/list', valid, control.insert);
router.patch('/list/:id', valid, control.update);
router.delete('/list/:id', control.remove);

export default router;

