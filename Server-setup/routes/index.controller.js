import { Router } from "express";
import userRoutes from "./user/index.controller.js";
import productRoutes from "./product/index.controller.js";
import cartRoutes from "./cart/index.controller.js";

const router = Router();

router.use('/user', userRoutes);

router.use('/product', productRoutes);

router.use('/cart', cartRoutes);

export default router