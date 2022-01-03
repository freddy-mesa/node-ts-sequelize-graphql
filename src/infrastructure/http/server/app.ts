import express from 'express'
import { appRouter } from './routers';
import { appGraphQL as graphqlV1 } from './graphql.v1';
import { appGraphQL as graphqlV2 } from './graphql.v2';
import { appGraphQL as graphqlV3 } from './graphql.v3';

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());

app.use('/', appRouter)
app.use('/graphql/v1', graphqlV1)
app.use('/graphql/v2', graphqlV2)
app.use('/graphql/v3', graphqlV3)

app.listen(port, () => {
    console.log(`Challenge app listening at http://localhost:${port}`)
})

export default app;