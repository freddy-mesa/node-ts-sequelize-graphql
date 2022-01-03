import { Router } from 'express';
import { createProductApiController } from '../../useCases/createProduct';
import { listProductApiController, findProductByIdApiController } from '../../useCases/retreiveProduct';
import { updateProductApiController } from '../../useCases/updateProduct';

const productApi = Router();

productApi.post('/', (req, res) => createProductApiController.execute(req, res))
productApi.put('/', (req, res) => updateProductApiController.execute(req, res))
productApi.get('/', (req, res) => listProductApiController.execute(req, res))
productApi.get('/:id', (req, res) => findProductByIdApiController.execute(req, res))

export { productApi };