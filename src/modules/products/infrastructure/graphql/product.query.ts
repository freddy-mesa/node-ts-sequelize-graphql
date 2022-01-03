import { GraphQLObjectType, GraphQLID } from 'graphql'
import { productListResponseType, productResponseType } from '../../../../infrastructure/graphql/product/product.schema.v2';
import { productQueryResolver } from './product.resolver'

const productQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
        listProduct: {
            type: productListResponseType,
            resolve: productQueryResolver.listProduct,
        },
        findProduct: {
            type: productResponseType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: productQueryResolver.findProduct,
        }
    }
});

export { productQuery }
