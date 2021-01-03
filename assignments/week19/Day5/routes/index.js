import express from 'express';
import control from '../controllers/controller.js'
import validate from '../middleware/middleware.js';

const router = new express.Router();

router.get('/list', control.getAll);
router.get('/list/:id', control.getOne);
router.post('/list', validate, control.insert);
router.put('/list/:id', validate, control.update);
router.delete('/list/:id', control.remove);

export default router;

