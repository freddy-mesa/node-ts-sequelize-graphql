import { Request } from 'express';

import { ProductFindByIdRequest, ProductResponse } from "../../../../core/domain/product/product";
import { BaseApiController } from "../../../../core/infrastructure/controller/api/baseApiController";
import { FindProductByIdUseCase } from "./findProductByIdUseCase";

export class FindProductByIdApiController extends BaseApiController<ProductResponse> {
    constructor(private useCase: FindProductByIdUseCase) {
        super();
    }

    async executeImpl(req: Request): Promise<ProductResponse> {
        var requestDto: ProductFindByIdRequest = { id: req.params.id };
        const result = await this.useCase.execute(requestDto);
        return result.getValue();
    }
}