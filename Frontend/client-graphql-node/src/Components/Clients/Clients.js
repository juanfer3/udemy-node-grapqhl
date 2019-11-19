import React from 'react';
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'

import { 
  ListGroup, 
  Card,
  Button
} from 'react-bootstrap';

import  {CLIENTS_QUERY}  from '../../Apollo/Queries';

function Client() {
  return (
    <Query query={CLIENTS_QUERY}>
        {({ loading, error, data }) => {
            if(loading) return 'cargando';
            if(error) return `Error: ${ error.message }`;

            const clients = data.Clients

            console.log(clients);
            
            return (
                <div>
                  <h1>
                      List Clients
                  </h1>

                  <Link className="btn btn-info" to="clients/new">
                    New Client
                  </Link>
                  
                      {
                        clients.map((client, index) => 
                        <ListGroup key={index}>
                          <ListGroup.Item>
                          <div className="clearfix">
                              <p className="float-left">
                                {client.name} - {client.company}
                              </p>
                              <Link to={'clients/edit/'+client._id}>
                                <Button variant="info" className="float-right">
                                  Editar
                                </Button>
                              </Link>
                              </div>
                          </ListGroup.Item>
                        </ListGroup>
                        )
                      }
                    
                </div>
            )
        }}
    </Query>
  );
}

export default Client;
