import * as graphql from 'graphql'
import { pageInfoType } from '../utils/util.schema.v2'

const productResponseType = new graphql.GraphQLObjectType({
    name: 'ProductResponse',
    fields: {
        id: { type: graphql.GraphQLID },
        name: { type: graphql.GraphQLString },
        description: { type: graphql.GraphQLString },
        price: { type: graphql.GraphQLFloat },
        quantity: { type: graphql.GraphQLFloat },
        image: { type: graphql.GraphQLString }
    }
});

const productListResponseType = new graphql.GraphQLObjectType({
    name: 'ProductListResponse',
    fields: {
        content: { type: new graphql.GraphQLList(productResponseType) },
        pageInfo: { type: pageInfoType }
    }
});

const productInput = new graphql.GraphQLInputObjectType({
    name: 'ProductInput',
    fields: {
        id: { type: graphql.GraphQLID },
        name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        description: { type: graphql.GraphQLString },
        price: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat) },
        quantity: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat) },
        image: { type: graphql.GraphQLString }
    }
});

export {
    productResponseType,
    productListResponseType,
    productInput
}