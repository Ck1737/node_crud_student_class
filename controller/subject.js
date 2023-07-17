const subject_model = require('../model/subject_model');

// Create subject
createSubject = async (req,res) => {

    const {
        name
    }=req.body

    const data = await subject_model.create(req.body);

    console.log(data);

    res.status(200).json({
        status:"Subject Created....",
        data
    })
}

// Find All Subject
viewAllSubject = async (req,res) => {

    const data = await subject_model.find();
    console.log(data);

    res.status(200).json({
        status:"View All Subject....",
        data
    })
}

// Find By Id
findSubject = async (req,res) => {

    const id = req.params.id;

    const data = await subject_model.findById(id);
    console.log(data);

    res.status(200).json({
        status:"Record Find.....",
        data
    })
}

// update Record
updateSubjectData = async (req,res) => {
    
    const id = req.params.id;
    const name = req.body.name;

    var data = await subject_model.findByIdAndUpdate(id,{name:name});
    var data = await subject_model.findById(id);

    console.log(data);

    res.status(200).json({
        status:"Update Record....",
        data
    })    
}

// Delete Record
deleteSubjectData = async (req,res) => {

    const id = req.params.id;
    const data = await subject_model.findByIdAndDelete(id);

    res.status(200).json({
        status:"Delete Record.....",
        data
    })    
}

module.exports = {
    createSubject,
    viewAllSubject,
    findSubject,
    updateSubjectData,
    deleteSubjectData
}