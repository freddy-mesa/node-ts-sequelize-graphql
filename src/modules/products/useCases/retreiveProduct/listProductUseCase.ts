import { Result } from "../../../shared/Result";
import { UseCase } from "../../../shared/UseCase";
import { ProductListRequest, ProductResponse } from "../../../../core/domain/product/product";
import { ProductRepositoryQuery } from "../../../../infrastructure/dao/product/productRepositoryQuery";
import { Page } from "../../../../core/domain/utils/pageable";

export class ListProductUseCase implements UseCase<ProductListRequest, Result<Page<ProductResponse>>> {

    constructor(private query: ProductRepositoryQuery) { }

    public async execute(request: ProductListRequest): Promise<Result<Page<ProductResponse>>> {
        var result = await this.query.list(request);
        return Result.ok(new Page<ProductResponse>(
            result.content.map(product => product.toResponse()),
            result.pageInfo));
    }
}