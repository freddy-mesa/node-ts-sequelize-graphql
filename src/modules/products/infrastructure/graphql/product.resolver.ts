import * as product from '../../../../core/domain/product/product';
import { Page } from '../../../../core/domain/utils/pageable';
import { createProductGraphqlController } from '../../useCases/createProduct';
import { listProductGraphqlController, findProductByIdGraphqlController } from '../../useCases/retreiveProduct';
import { updateProductGraphqlController } from '../../useCases/updateProduct';

const productQueryResolver = {
    listProduct: async (): Promise<Page<product.ProductResponse>> => {
        return await listProductGraphqlController.execute({} as any);
    },
    findProduct: async ({ id }: { id: string }): Promise<product.ProductResponse> => {
        return await findProductByIdGraphqlController.execute({ id });
    },
}

const productMutationResolver = {
    createProduct: async ({ input }: { input: product.ProductCreateRequest }): Promise<product.ProductResponse> => {
        return await createProductGraphqlController.execute(input);
    },
    updateProduct: async ({ input }: { input: product.ProductUpdateRequest }): Promise<product.ProductResponse> => {
        return await updateProductGraphqlController.execute(input);
    }
}

const productResolver = {
    ...productQueryResolver,
    ...productMutationResolver
}

export {
    productQueryResolver,
    productMutationResolver,
    productResolver
};