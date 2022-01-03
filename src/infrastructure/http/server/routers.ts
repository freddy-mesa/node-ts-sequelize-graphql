import express from 'express'
import { productApi } from '../../../modules/products/infrastructure/api/product.router';

const appRouter = express.Router();

appRouter.use('/product', productApi);

export { appRouter }