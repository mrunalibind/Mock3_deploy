let mongoose=require("mongoose");
let customerSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    isAdmin:Boolean
})

let CustomerModel=mongoose.model("customer",customerSchema);
module.exports={CustomerModel};