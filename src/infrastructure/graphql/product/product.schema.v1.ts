const productSchema = `
    type ProductResponse {
        id: ID!
        name: String!
        description: String!
        price: Float!
        quantity: Float!
        image: String
    }
    type ProductListResponse { 
        content: [ProductResponse]
        pageInfo: PageInfo
    }
    input ProductInput {
        name: String!
        description: String!
        price: Float!
        quantity: Float!
        image: String
    }
    type Query {
        listProduct: ProductListResponse
        findProduct(id: ID!): ProductResponse
    }
    type Mutation {
        createProduct(input: ProductInput): ProductResponse
        updateProduct(id: ID!, input: ProductInput): ProductResponse
    }
`;

export { productSchema };