import { Result } from "../../../shared/Result";
import { UseCase } from "../../../shared/UseCase";
import { ProductFindByIdRequest, ProductResponse } from "../../../../core/domain/product/product";
import { ProductRepositoryQuery } from "../../../../infrastructure/dao/product/productRepositoryQuery";

export class FindProductByIdUseCase implements UseCase<ProductFindByIdRequest, Result<ProductResponse>> {

    constructor(private command: ProductRepositoryQuery) { }

    public async execute(request: ProductFindByIdRequest): Promise<Result<ProductResponse>> {
        var result = await this.command.findById(request);
        return Result.ok(result?.toResponse());
    }
}