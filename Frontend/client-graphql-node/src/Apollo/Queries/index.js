import gql from 'graphql-tag';

export const CLIENTS_QUERY = gql `{
    Clients{
        _id
        name
        last_name
        company
    }
}`;