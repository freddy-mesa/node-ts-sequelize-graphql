import { Request } from 'express';

import { ProductListRequest, ProductResponse } from "../../../../core/domain/product/product";
import { Page } from '../../../../core/domain/utils/pageable';
import { BaseApiController } from "../../../../core/infrastructure/controller/api/baseApiController";
import { ListProductUseCase } from "./listProductUseCase";

export class ListProductApiController extends BaseApiController<Page<ProductResponse>> {
    constructor(private useCase: ListProductUseCase) {
        super();
    }

    async executeImpl(req: Request): Promise<Page<ProductResponse>> {
        var requestDto = req.body as ProductListRequest;
        const result = await this.useCase.execute(requestDto);
        return result.getValue();
    }
}