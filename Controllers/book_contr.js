const { BookModel } = require("../Model/book_model")

const getBooks=async(req,res)=>{
    try {
        let books=await BookModel.find();
        res.status(200).send(books)
    } catch (error) {
        res.status(400).send(error.message) 
    }
}
const getSpecificBook=async(req,res)=>{
    let {id}=req.params;
    try {
        let books=await BookModel.find({_id:id});
        res.status(200).send(books)
    } catch (error) {
        res.status(400).send(error.message) 
    }
}
const getCategoryBook=async(req,res)=>{
    let {category,author}=req.query;
    try {
        if(!author){
            let books=await BookModel.find({category:category})
            return res.status(200).send(books)
        }
        let books=await BookModel.aggregate([{
            $match:{
                category:category,
                author:author
            }
        }])
        return res.status(200).send(books)
        
    } catch (error) {
        res.status(400).send(error.message) 
    }
}

// For Admin



const createBookAdmin=async(req,res)=>{
    
    let {title,author,category,price,quantity}=req.body;
    try {
        let book=new BookModel({title,author,category,price,quantity});
        await book.save();
        res.status(201).send({msg:"Book Created"})
        
    } catch (error) {
        res.status(400).send(error.message) 
    }
}

const updateBookAdmin=async(req,res)=>{
    let {id}=req.params;
    try {
        await BookModel.findByIdAndUpdate({_id:id},req.body);
        res.status(201).send({msg:"Book Updated"})
    } catch (error) {
        res.status(400).send(error.message) 
    }
}

module.exports={getBooks,getSpecificBook,getCategoryBook,createBookAdmin,updateBookAdmin}