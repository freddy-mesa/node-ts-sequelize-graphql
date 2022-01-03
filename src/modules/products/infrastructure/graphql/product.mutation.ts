import * as graphql from 'graphql'
import { productInput, productResponseType } from '../../../../infrastructure/graphql/product/product.schema.v2';
import { productMutationResolver } from './product.resolver'

const productMutation = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createProduct: {
            type: productResponseType,
            args: {
                input: { type: new graphql.GraphQLNonNull(productInput) }
            },
            resolve: productMutationResolver.createProduct
        },
        updateProduct: {
            type: productResponseType,
            args: {
                input: { type: new graphql.GraphQLNonNull(productInput) }
            },
            resolve: productMutationResolver.updateProduct
        }
    })
});

export { productMutation }
