import {gql} from 'apollo-server'
import {readFileSync} from 'fs'

const typeDefs = readFileSync('./graphql/schema.graphql', 'utf-8')

export default typeDefs