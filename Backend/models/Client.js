import mongoose from 'mongoose';
const { Schema, model} = mongoose;


const ClientSchema = {
    name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    company:{
        type: String
    },
    emails: [{
        email: String
    }],
    age:{
        type: Number,
        required: true
    },
    type_client:{
        type: String,
    },
    purchases: [{
        product: String,
        price: Number
    }],
}

module.exports = model("Client", ClientSchema)