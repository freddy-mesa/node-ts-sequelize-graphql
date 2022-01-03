import { Result } from "../../../shared/Result";
import { UseCase } from "../../../shared/UseCase";
import { ProductCreateRequest, ProductResponse } from "../../../../core/domain/product/product";
import { ProductRepositoryCommand } from "../../../../infrastructure/dao/product/productRepositoryCommand";

export class CreateProductUseCase implements UseCase<ProductCreateRequest, Result<ProductResponse>> {

    constructor(private command: ProductRepositoryCommand) { }

    public async execute(request: ProductCreateRequest): Promise<Result<ProductResponse>> {
        var result = await this.command.create(request);
        if (!result) return Result.fail("Product not created");
        return Result.ok(result.toResponse());
    }
}