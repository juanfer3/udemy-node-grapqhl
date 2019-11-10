const express = require ('express');
const morgan = require ('morgan');
const path = require('path');
const cors = require('cors');

import graphqlHTTP from 'express-graphql';
var { buildSchema } = require('graphql');
import schema from  './Backend/graphql/schema';

const { mongoose } = require('./Backend/config/database');


const app = express();



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

// this folders for this application will be used to store public file images


app.listen(app.get('port'), () =>{
    console.log('server on port: ', app.get('port'));
});