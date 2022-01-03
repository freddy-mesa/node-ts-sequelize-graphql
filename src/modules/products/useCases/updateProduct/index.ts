import { ProductRepositoryCommandImpl } from "../../../../infrastructure/dao/product/productRepositoryCommand";

import { UpdateProductUseCase } from "./updateProductUseCase";
import { UpdateProductApiController } from "./updateProductApiController";
import { UpdateProductGraphqlController } from "./updateProductGraphqlController";

const productRepositoryCommand = new ProductRepositoryCommandImpl();

const updateProductUseCase = new UpdateProductUseCase(productRepositoryCommand);
const updateProductApiController = new UpdateProductApiController(updateProductUseCase)
const updateProductGraphqlController = new UpdateProductGraphqlController(updateProductUseCase)

export {
    updateProductUseCase,
    updateProductApiController,
    updateProductGraphqlController
}