const express=require("express");
const { customerRegister, customerLogin } = require("../Controllers/customer_contr");
let customerRouter=express.Router();

customerRouter.post("/api/register",customerRegister);
customerRouter.post("/api/login",customerLogin);

module.exports={customerRouter}

