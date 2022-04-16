import { Router } from 'express'
import { getAllController } from '../controllers/getAllController';
import { getByIdController } from '../controllers/getByIdController';

const router = Router()

router.get('/all', getAllController.GetAll);

router.get('/all/:id', getByIdController.getById);

router.post('/',);

router.put('/',);

router.delete('/',);

export default router
