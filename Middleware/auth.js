const auth=async(req,res,next)=>{
    let token=req.cookies.token;
    try {
        let valid=jwt.verify(token,"token",(err,decode)=>{
            console.log(decode)
        })
        if(valid){
            next();
        }
        else{
            res.status(400).send({msg:"Unauthorized"})
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports={auth};