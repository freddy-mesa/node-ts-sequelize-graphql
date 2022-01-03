import { Request, Response } from "express";
import { GraphQLSchema } from 'graphql';
import { getGraphQLParameters, processRequest, renderGraphiQL, shouldRenderGraphiQL, sendResult } from "graphql-helix";

import { productMutation } from '../../../modules/products/infrastructure/graphql/product.mutation'
import { productQuery } from '../../../modules/products/infrastructure/graphql/product.query'

const schema = new GraphQLSchema({
    query: productQuery,
    mutation: productMutation,
});

const appGraphQL = async (req: Request, res: Response) => {
    // Create a generic Request object that can be consumed by Graphql Helix's API
    const request = {
        body: req.body,
        headers: req.headers,
        method: req.method,
        query: req.query,
    };

    // Determine whether we should render GraphiQL instead of returning an API response
    if (shouldRenderGraphiQL(request)) {
        res.send(renderGraphiQL());
    } else {
        // Extract the Graphql parameters from the request
        const { operationName, query, variables } = getGraphQLParameters(request);

        // Validate and execute the query
        const result = await processRequest({
            operationName,
            query,
            variables,
            request,
            schema,
        });

        sendResult(result, res);
    }
}

export { appGraphQL }