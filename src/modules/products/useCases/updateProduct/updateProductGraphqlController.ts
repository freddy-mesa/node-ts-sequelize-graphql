import { ProductUpdateRequest, ProductResponse } from "../../../../core/domain/product/product";
import { BaseGraphqlController } from "../../../../core/infrastructure/controller/graphql/baseGraphqlController";
import { UpdateProductUseCase } from "./updateProductUseCase";

export class UpdateProductGraphqlController extends BaseGraphqlController<ProductUpdateRequest, ProductResponse> {
    constructor(private useCase: UpdateProductUseCase) {
        super();
    }

    async executeImpl(req: ProductUpdateRequest): Promise<ProductResponse> {
        const result = await this.useCase.execute(req);
        return result.getValue();
    }
}