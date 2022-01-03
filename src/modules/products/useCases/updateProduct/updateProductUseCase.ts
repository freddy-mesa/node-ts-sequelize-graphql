import { Result } from "../../../shared/Result";
import { UseCase } from "../../../shared/UseCase";
import { ProductResponse, ProductUpdateRequest } from "../../../../core/domain/product/product";
import { ProductRepositoryCommand } from "../../../../infrastructure/dao/product/productRepositoryCommand";

export class UpdateProductUseCase implements UseCase<ProductUpdateRequest, Result<ProductResponse>> {

    constructor(private command: ProductRepositoryCommand) { }

    public async execute(request: ProductUpdateRequest): Promise<Result<ProductResponse>> {
        var result = await this.command.update(request);
        if (!result) return Result.fail("Product not found");
        return Result.ok(result.toResponse());
    }
}