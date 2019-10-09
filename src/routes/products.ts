import { Router } from "express";

import ProductsController from "../controllers/products";

const router = Router();

router.get("/", ProductsController.list);

export default router;
