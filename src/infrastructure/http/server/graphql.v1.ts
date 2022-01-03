import { graphqlHTTP } from 'express-graphql';
import { buildASTSchema } from 'graphql';
import { gql } from 'graphql-tag'

import { utilsSchema } from '../../graphql/utils/util.schema.v1';

import { productResolver } from '../../../modules/products/infrastructure/graphql/product.resolver'
import { productSchema } from '../../graphql/product/product.schema.v1';

var schema = buildASTSchema(gql([
    utilsSchema,
    productSchema
].join()));

var root = {
    ...productResolver
};

var appGraphQL = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
});

export { appGraphQL }