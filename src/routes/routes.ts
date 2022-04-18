import { Router } from 'express'
import { createController } from '../controllers/createController';
import { deleteController } from '../controllers/deleteController';
import { getAllController } from '../controllers/getAllController';
import { getByIdController } from '../controllers/getByIdController';
import { updateController } from '../controllers/updateController';

const router = Router()

router.get('/all', getAllController.GetAll);

router.get('/all/:id', getByIdController.getById);

router.post('/allCreate', createController.createPost);

router.put('/all/:id', updateController.update);

router.delete('/all/:id', deleteController.deleteId);

export default router
