import gql from 'graphql-tag';

export const CREATE_CLIENTS = gql `
    mutation createClient($input: ClientInput){
        createClient(input: $input){
        _id
        name
        last_name
        emails {
            _id
            emails
        }
    }
}`;

export const UPDATE_CLIENT = gql `
    mutation updateClient( $id: ID!  ,$input: ClientInput){
        updateClient(_id: $id input: $input){
            _id
            name
            last_name
            company
        }
    }`;
