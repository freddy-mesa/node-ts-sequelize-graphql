import { ProductListRequest, ProductResponse } from "../../../../core/domain/product/product";
import { Page } from '../../../../core/domain/utils/pageable';
import { BaseGraphqlController } from '../../../../core/infrastructure/controller/graphql/baseGraphqlController';
import { ListProductUseCase } from "./listProductUseCase";

export class ListProductGraphqlController extends BaseGraphqlController<ProductListRequest, Page<ProductResponse>> {
    constructor(private useCase: ListProductUseCase) {
        super();
    }

    async executeImpl(req: ProductListRequest): Promise<Page<ProductResponse>> {
        const result = await this.useCase.execute(req);
        return result.getValue();
    }
}