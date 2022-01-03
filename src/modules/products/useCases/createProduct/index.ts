import { ProductRepositoryCommandImpl } from "../../../../infrastructure/dao/product/productRepositoryCommand";

import { CreateProductUseCase } from "./createProductUseCase";
import { CreateProductApiController } from "./createProductApiController";
import { CreateProductGraphqlController } from "./createProductGraphqlController";

const productRepositoryCommand = new ProductRepositoryCommandImpl();

const createProductUseCase = new CreateProductUseCase(productRepositoryCommand);
const createProductApiController = new CreateProductApiController(createProductUseCase)
const createProductGraphqlController = new CreateProductGraphqlController(createProductUseCase)

export {
    createProductUseCase,
    createProductApiController,
    createProductGraphqlController
}