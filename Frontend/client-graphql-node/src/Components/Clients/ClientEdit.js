import React from 'react';

/* Apollo */
import { Query, Mutation } from 'react-apollo'
import  {GET_CLIENT}  from '../../Apollo/Queries';
import { UPDATE_CLIENT } from '../../Apollo/Mutations'

import NotificationMsg  from '../Notifications/NotificationMsg'

import FormClient from './FormClient';

function ClientEdit(props) {

  const $id = props.match.params.id 

  return (
    <Query query={GET_CLIENT} variables={{ id: $id }} >
      {({ loading, error, data, startPolling, stopPolling }) => {
          if(loading) return 'cargando...';
          if(error) return `Error: ${ error.message }`;

          const client = data.getClient
            
          
          return (
            <Mutation mutation={UPDATE_CLIENT}>

              {createClient => {
                const saveData = (input) => {

                  console.log(input);
                  

                  const rsp =    createClient(  {
                      variables: {
                        id: $id, 
                        input: input
                      }
                  })
                    
                  rsp.then(data => {
                      
                      NotificationMsg( {
                        title: "Update Register", 
                        type: 'success',
                        message: "Update Register", 
                        name: input.name
                      } )
                      props.history.push('/')
                  }).catch(err => {
                      console.log(err);
                  })
                }
                return (  
                  <div>
                      <h2>Editar Cliente</h2>
                      <FormClient 
                      client={client}
                      saveData={saveData}
                      />
                  </div>
                )
              }}
            </Mutation>
          );
      }}
    </Query>
  );
}

export default ClientEdit;
