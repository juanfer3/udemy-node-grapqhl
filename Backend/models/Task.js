const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const TaskSchema = new Schema({
    title:{ 
        type: String, required: true 
    },
    description: String 
});



module.exports = model('Task', TaskSchema);