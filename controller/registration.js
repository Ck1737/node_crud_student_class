const signUp_model = require('../model/signUp_model');
const auth = require('../middelware/auth');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const LocalStrategy = require("passport-local");

// Sign Up Router
createSignUp = async (req,res) => {   

    var email = req.body.email;
    var check_email = await signUp_model.find({email:email});

      if(check_email=='')
      {
        password = await bcrypt.hash(req.body.password,10);        

        const obj = {
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            password:password
        }

        var data = await signUp_model.create(obj);

        res.status(200).json({
            status:"Signup....",
            data
        })
      }
      else
      {
        return res.status(400).send("User Already Exist. Please Login");
      }
}

// login page
signInData = async (req,res) => {

    // await storage.init();

    var email = req.body.email;
    var hash = await signUp_model.find({email:email});

    if(hash!='')
    {   
        var pass = req.body.password;
        bcrypt.compare(pass,hash[0].password,async function(err,result){        

            if(result==true)
            {                
                var token = jwt.sign({id:hash.id,email:email},'demo');                  
                res.status(200).json({
                    status:"Signin....",
                    hash,
                    token
                })
            }
            else
            {
                return res.status(400).send("Please Check Password....");
            }
        })
    }
    else
    {
        return res.status(400).send("Please Check Email....");
    }   
}

// Find All data

findAllData = async (req,res) => {
    
    const find = await signUp_model.find();
     
    res.status(200).json({
        status:"Data Find....",
        find    
    })
}

// find Data By Id

findData = async (req,res) => {
    var id = req.params.id;

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        
        var id = req.params.id;
        var data = await signUp_model.findById(id);

        if(data===null)
        {
            return res.status(400).send("Id Not Found....");       
        }
        else
        {               
            res.status(200).json({
                status:"Find Record....",
                data
            })       
        }

    }
    else
    {
        return res.status(400).send("Please Enter 24 Character ID");
    }

}

// delete data from id

deleteData = async (req,res) => {

   const id = req.params.id;

   if (id.match(/^[0-9a-fA-F]{24}$/)){

        const result = await signUp_model.findByIdAndDelete(id);

        if(result===null)
        {
                return res.status(400).send("Id Not Found....");
        }
        else
        {       
                res.status(200).json({
                    status:"delete Data.....",
                    result
                })
        }   
    }
    else
    {
        return res.status(400).send("Please Enter 24 Character ID");
    }
   
}

// logout page

signOut = async (req,res) => {

    // await storage.init();
    // await storage.clear();

    res.status(200).json({
        status:"Logout Successfully....."        
    })
}

module.exports = {
    createSignUp,
    signInData,
    findAllData,
    findData,
    deleteData,
    signOut    
}