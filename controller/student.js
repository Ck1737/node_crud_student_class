const user_model = require("../model/user");

// Create Student
createStudent = async (req,res) => {    
    
    const {
        name,
        role    
    }=req.body

var data = await user_model.create(req.body);

res.status(200).json({
    status:"Record Insert successfully",
    data
})

}

// View Student by all Record
viewStudent = async (req,res) => {

    var data = await user_model.find();

    res.status(200).json({
        status:"View All Record",
        data
    })
}

//view student find by id

findId = async (req,res) => {

    var id = req.params.id;
    var data = await user_model.findById(id);

    res.status(200).json({
        status:"Find Record",
        data
    })
}

// update record by id

updateRecord = async (req,res) => {

    var id = req.params.id;
    var name = req.body.name;

    var data = await user_model.findByIdAndUpdate(id,{name:name});
    var data = await user_model.findById(id); 

    res.status(200).json({
        status:"update Record",
        data
    })
}

// Delete Record By Id

deleteRecord = async (req,res) => {
    
    var id = req.params.id;
    var data = await user_model.findByIdAndDelete(id);

    res.status(200).json({
        status:"Record Deleted",
        data
    })
}

module.exports = {    
    createStudent,
    viewStudent,
    findId,
    updateRecord,
    deleteRecord
}