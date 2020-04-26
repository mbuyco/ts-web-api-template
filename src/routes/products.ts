import { Router } from 'express';

import ProductsController from '../controllers/products';

const router = Router();

router.get('/', ProductsController.list);
router.get('/:id', ProductsController.get);
router.post('/', ProductsController.create);
router.put('/:id', ProductsController.update);
router.delete('/:id', ProductsController.destroy);

export default router;
