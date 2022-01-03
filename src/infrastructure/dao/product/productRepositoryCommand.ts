import { ProductCreateRequest, ProductUpdateRequest } from "../../../core/domain/product/product";
import { ProductEntity } from "./productEntity";

export interface ProductRepositoryCommand {
    create(product: ProductCreateRequest): Promise<ProductEntity>;
    update(product: ProductUpdateRequest): Promise<ProductEntity | undefined>;
}

export class ProductRepositoryCommandImpl implements ProductRepositoryCommand {
    async update(request: ProductUpdateRequest): Promise<ProductEntity | undefined> {
        var product = await ProductEntity.findByPk(request.id);
        if (!product) return undefined;
        return await product.update(request);
    }
    async create(product: ProductCreateRequest): Promise<ProductEntity> {
        var result = await ProductEntity.create(product);
        return result;
    }
}
