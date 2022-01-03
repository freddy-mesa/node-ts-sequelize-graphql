import { Request } from 'express';

import { ProductUpdateRequest, ProductResponse } from "../../../../core/domain/product/product";
import { BaseApiController } from "../../../../core/infrastructure/controller/api/baseApiController";
import { UpdateProductUseCase } from "./updateProductUseCase";

export class UpdateProductApiController extends BaseApiController<ProductResponse> {
    constructor(private useCase: UpdateProductUseCase) {
        super();
    }

    async executeImpl(req: Request): Promise<ProductResponse> {
        var requestDto = req.body as ProductUpdateRequest;
        const result = await this.useCase.execute(requestDto);
        return result.getValue();
    }
}