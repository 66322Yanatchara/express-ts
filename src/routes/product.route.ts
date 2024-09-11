import { Router } from 'express';
import productController from '../controllers/product.controller';
const productRouter = Router();
// specifies the endpoint and the method to call
productRouter.get('/', productController.getAll);
// export the router
export default productRouter;