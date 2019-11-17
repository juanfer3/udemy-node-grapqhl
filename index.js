const express = require ('express');
const morgan = require ('morgan');
const path = require('path');
const cors = require('cors');

import { ApolloServer } from 'apollo-server-express'

//import graphqlHTTP from 'express-graphql';
//var { buildSchema } = require('graphql');
import { typeDefs } from  './Backend/graphql/schema';
import { resolvers } from './Backend/graphql/resolvers/resolvers'

const { mongoose } = require('./Backend/config/database');

const app = express();

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({app})

// Middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

//Routes
app.use( require('./Backend/routes/routes') )

//public
express.static(__dirname + '/public')
app.use(express.static(__dirname + '/public'));

//set view engine
app.set('views', __dirname + '/views');
app.set("view engine","jade")

app.listen({port: 4000}, () => console.log(`Server is run on ${server.graphqlPath}`));

/*
// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

//Routes
app.use( require('./Backend/routes/routes') )


//Graphql
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

//public
express.static(__dirname + '/public')
app.use(express.static(__dirname + '/public'));

//set view engine
app.set('views', __dirname + '/views');
app.set("view engine","jade")

// this folders for this application will be used to store public file images


app.listen(app.get('port'), () =>{
    console.log('server on port: ', app.get('port'));
});
/* */