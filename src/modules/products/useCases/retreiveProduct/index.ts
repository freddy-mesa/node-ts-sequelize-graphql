import { ProductRepositoryQueryImpl } from "../../../../infrastructure/dao/product/productRepositoryQuery";

import { ListProductUseCase } from "./listProductUseCase";
import { ListProductApiController } from "./listProductApiController";
import { ListProductGraphqlController } from "./listProductGraphqlController";

import { FindProductByIdUseCase } from "./findProductByIdUseCase";
import { FindProductByIdApiController } from "./findProductByIdApiController";
import { FindProductByIdGraphqlController } from "./findProductByIdGraphqlController";

const productRepositoryQuery = new ProductRepositoryQueryImpl();

const listProductUseCase = new ListProductUseCase(productRepositoryQuery);
const listProductApiController = new ListProductApiController(listProductUseCase)
const listProductGraphqlController = new ListProductGraphqlController(listProductUseCase)

const findProductByIdUseCase = new FindProductByIdUseCase(productRepositoryQuery);
const findProductByIdApiController = new FindProductByIdApiController(findProductByIdUseCase)
const findProductByIdGraphqlController = new FindProductByIdGraphqlController(findProductByIdUseCase)

export {
    listProductUseCase,
    listProductApiController,
    listProductGraphqlController,

    findProductByIdUseCase,
    findProductByIdApiController,
    findProductByIdGraphqlController
}