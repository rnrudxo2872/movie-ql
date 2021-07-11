import {
    ApolloServer
} from 'apollo-server';
import resolvers from './graphql/resolver';
import typeDefs from './graphql/schema';

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(() => console.log("Graphql Server Running:4000"))