import { resolvers } from './resolvers/resolvers';
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = importSchema('Backend/graphql/schema.graphql');

const schema = makeExecutableSchema({ typeDefs, resolvers })

export { schema }