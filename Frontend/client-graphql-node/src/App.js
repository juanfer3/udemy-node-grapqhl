import React, {Fragment} from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import client from './Apollo/Apollo'

import './App.css';
import Nabvar from './Components/Navbar/Navbar';
import Client from './Components/Clients/Clients';
import ClientCreate from './Components/Clients/ClientCreate';
import ClientEdit from './Components/Clients/ClientEdit';


function App() {
  return (
    <ApolloProvider client={client}>
      
        <Router>
          <Fragment>
            <Nabvar/>
            <br/>
            <br/>
            <div className="container">
               <Switch>
                 <Route exact path="/" component={Client} />
                 <Route exact path="/clients/new" component={ClientCreate} />
                 <Route exact path="/clients/edit/:id" component={ClientEdit} />
               </Switch>
            </div>
          </Fragment>
        </Router>
    </ApolloProvider>
  );
}

export default App;
