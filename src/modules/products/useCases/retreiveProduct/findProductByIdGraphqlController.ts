import { ProductFindByIdRequest, ProductResponse } from "../../../../core/domain/product/product";
import { BaseGraphqlController } from "../../../../core/infrastructure/controller/graphql/baseGraphqlController";
import { FindProductByIdUseCase } from "./findProductByIdUseCase";

export class FindProductByIdGraphqlController extends BaseGraphqlController<ProductFindByIdRequest, ProductResponse> {
    constructor(private useCase: FindProductByIdUseCase) {
        super();
    }

    async executeImpl(req: ProductFindByIdRequest): Promise<ProductResponse> {
        const result = await this.useCase.execute(req);
        return result.getValue();
    }
}