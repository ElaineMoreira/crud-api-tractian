import { Router } from 'express'
import { getAllController } from '../controllers/getAllController';

const router = Router()

router.get('/', getAllController.GetAll);

router.get('/', () => {});

router.post('/', () => {});

router.put('/', () => {});

router.delete('/', () => {});

export default router
