const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    
    name:{
        type:String
    }
})

const subject_model = mongoose.model('subject',subjectSchema);

module.exports = subject_model ;