import { Request } from 'express';

import { ProductCreateRequest, ProductResponse } from "../../../../core/domain/product/product";
import { BaseApiController } from "../../../../core/infrastructure/controller/api/baseApiController";
import { CreateProductUseCase } from "./createProductUseCase";

export class CreateProductApiController extends BaseApiController<ProductResponse> {
    constructor(private useCase: CreateProductUseCase) {
        super();
    }

    async executeImpl(req: Request): Promise<ProductResponse> {
        var requestDto = req.body as ProductCreateRequest;
        const result = await this.useCase.execute(requestDto);
        return result.getValue();
    }
}