const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema ({
    exam_id :{
        type: Schema.Types.ObjectId, 
        ref: "exam"
    },
    student_id :{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    marks :{
        type : Number
    }

})

const result = mongoose.model('result',resultSchema);

module.exports = result ;