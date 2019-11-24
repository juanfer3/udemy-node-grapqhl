import ApolloClient, {InMemoryCache} from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache({
        addTypename: false
    }),
    onError: ({networkError, graphQLErrors}) =>{
        console.log('graphQLErrors', graphQLErrors);
        console.log('networkError', networkError);
    }
});

export default client