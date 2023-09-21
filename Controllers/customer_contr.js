const { CustomerModel } = require("../Model/customer_model");
let bcrypt=require("bcrypt");
let jwt=require("jsonwebtoken");

const customerRegister=async(req,res)=>{
    let {name,email,password,isAdmin}=req.body;
    try {
     let user=await CustomerModel.findOne({email})
     if(user){
        return res.status(400).send({msg:"User is already exist"})
     }
     bcrypt.hash(password,5,async(err,hash)=>{
        if(res){
            let user =new CustomerModel({name,email,password:hash,isAdmin});
            await user.save();
            res.status(201).send({msg:"Customer Registered Successully"});
        }
        else {
            res.status(400).send(err)
        }
     })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const customerLogin=async(req,res)=>{
    let {email,password}=req.body;
    try {
        let user=await CustomerModel.findOne({email})
        if(!user){
            return res.status(400).send({msg:"User is not exist"})
        }
        
        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
               
                let token = jwt.sign({ user: user }, 'token');
                res.cookie("token",token)
                res.status(201).send({msg:"Login Successully",token});
            }
            else if(err){
                res.status(400).send(err);
            }
        })
        
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports={customerRegister,customerLogin}