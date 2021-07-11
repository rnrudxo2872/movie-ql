import {
    ApolloServer
} from 'apollo-server';
import resolvers from './graphql/resolver';
import typeDefs from './graphql/schema';

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({
    port:4250
}).then(() => console.log("Graphql Server Running:4250"))