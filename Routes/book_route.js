let express=require("express");
const { getBooks, getSpecificBook, getCategoryBook, createBookAdmin, updateBookAdmin } = require("../Controllers/book_contr");
const { authorize } = require("../Middleware/authorize");
let bookRouter=express.Router();

bookRouter.get("/api/books",getBooks);
bookRouter.get("/api/books/:id",getSpecificBook);
bookRouter.get("/api/books",getCategoryBook);
// bookRouter.get("/api/books?author&category",getAuthorCategory);

bookRouter.post("/api/books",authorize,createBookAdmin);
bookRouter.patch("/api/books/:id",authorize,updateBookAdmin);

module.exports={bookRouter};