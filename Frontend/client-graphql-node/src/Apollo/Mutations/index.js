import gql from 'graphql-tag';

export const CREATE_CLIENTS = gql `
    mutation createClient($input: ClientInput){
        createClient(input: $input){
        _id
        name
        last_name
    }
}`;
