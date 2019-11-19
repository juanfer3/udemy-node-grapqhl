import gql from 'graphql-tag';

const CLIENTS_QUERY = gql `{
    Clients{
        _id
        name
        last_name
        company
    }
}`;



export  {
    CLIENTS_QUERY
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