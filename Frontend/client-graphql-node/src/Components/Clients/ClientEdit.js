import React from 'react';
import { Query } from 'react-apollo'
import  {GET_CLIENT}  from '../../Apollo/Queries';

import FormClient from './FormClient';

function ClientEdit() {
  return (
    <Query query={GET_CLIENT} variables={{ id: "5dd5ecdd87337e3250c9a862" }} >
      {({ loading, error, data, startPolling, stopPolling }) => {
          if(loading) return 'cargando';
          if(error) return `Error: ${ error.message }`;

          const client = data.getClient
            

          return (
            <div>
                <h2>Editar Cliente</h2>
                <FormClient client={client}/>
            </div>
          );
      }}
    </Query>
  );
}

export default ClientEdit;
