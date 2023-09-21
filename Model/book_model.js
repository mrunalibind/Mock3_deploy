let mongoose=require("mongoose");

let bookSchema=mongoose.Schema({
    title:String,
    author:String,
    category:String,
    price:Number,
    quantity:Number
})

let BookModel=mongoose.model("book",bookSchema);
module.exports={BookModel};