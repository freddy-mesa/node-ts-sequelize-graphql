import { ProductFindByIdRequest, ProductListRequest } from "../../../core/domain/product/product";
import { Page } from "../../../core/domain/utils/pageable";
import { ProductEntity } from "./productEntity";

export interface ProductRepositoryQuery {
    findById(request: ProductFindByIdRequest): Promise<ProductEntity | null>;
    list(request: ProductListRequest): Promise<Page<ProductEntity>>
}

export class ProductRepositoryQueryImpl implements ProductRepositoryQuery {
    async findById(request: ProductFindByIdRequest): Promise<ProductEntity | null> {
        return await ProductEntity.findByPk(request.id);
    }
    async list(request: ProductListRequest): Promise<Page<ProductEntity>> {
        var pageable = request?.pageable ?? {
            page: 1,
            size: 10,
        };
        var offset = (pageable.page - 1) * pageable.size
        var result = await ProductEntity.findAndCountAll({
            offset: offset,
            limit: pageable.size,
            order: pageable.sort?.flatMap(sort => [sort.property, sort.direction])
        });
        return {
            content: result.rows,
            pageInfo: {
                totalPages: Math.ceil(result.count / pageable.size),
                totalSize: result.count,
                page: pageable.page,
                size: pageable.size,
                offset: offset,
            }
        };
    }

}

