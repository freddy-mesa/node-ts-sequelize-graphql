import * as graphql from "graphql";

const pageInfoType = new graphql.GraphQLObjectType({
    name: 'PageInfo',
    fields: {
        totalPages: { type: graphql.GraphQLInt },
        totalSize: { type: graphql.GraphQLInt },
        page: { type: graphql.GraphQLInt },
        size: { type: graphql.GraphQLInt },
        offset: { type: graphql.GraphQLInt }
    }
})

export { pageInfoType };