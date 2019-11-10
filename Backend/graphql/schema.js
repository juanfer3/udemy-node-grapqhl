import { makeExecutableSchema } from 'graphql-tools'
import {
    resolvers
} from './resolvers/resolvers'


const typeDefs = {};

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})
