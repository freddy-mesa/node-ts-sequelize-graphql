import { ProductCreateRequest, ProductResponse } from "../../../../core/domain/product/product";
import { BaseGraphqlController } from "../../../../core/infrastructure/controller/graphql/baseGraphqlController";
import { CreateProductUseCase } from "./createProductUseCase";

export class CreateProductGraphqlController extends BaseGraphqlController<ProductCreateRequest, ProductResponse> {
    constructor(private useCase: CreateProductUseCase) {
        super();
    }

    async executeImpl(req: ProductCreateRequest): Promise<ProductResponse> {
        const result = await this.useCase.execute(req);
        return result.getValue();
    }
}