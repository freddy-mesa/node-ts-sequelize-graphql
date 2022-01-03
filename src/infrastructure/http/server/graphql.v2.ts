import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';

import { productMutation } from '../../../modules/products/infrastructure/graphql/product.mutation'
import { productQuery } from '../../../modules/products/infrastructure/graphql/product.query'

const schema = new GraphQLSchema({
    query: productQuery,
    mutation: productMutation,
});

const appGraphQL = graphqlHTTP({
    schema: schema,
    graphiql: true,
});

export { appGraphQL }