import mongoose from 'mongoose';
const { Schema, model} = mongoose;

const EmailSchema= {
    email:{
        type: String,
    },
}

module.exports = model("emails", EmailSchema)