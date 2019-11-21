import gql from 'graphql-tag';

const CLIENTS_QUERY = gql `{
    Clients{
        _id
        name
        last_name
        company
    }
}`;



const GET_CLIENT = gql `
    query getClient($id: ID){
        getClient(_id: $id){
            _id
            name
            last_name
            type_client
            company
            age
            emails{
            _id
            email
            }
        }
    }
`;


export  {
    CLIENTS_QUERY,
    GET_CLIENT
}
/*
name
last_name: "Molina"
company: "AlejaSAS"
age: 19
type_client: PREMIUN
emails: {
    email: "ale@gmail.com"
}
/* */

