let mongoose=require("mongoose");

let orderSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Type.objectID,
        ref:"User"
    },
    books:[{
        type:mongoose.Schema.Type.objectID,
        ref:"Book"
    }],
    totalAmount:Number
})

let OrderModel=mongoose.model("order",orderSchema);
module.exports={OrderModel};