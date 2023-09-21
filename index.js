let express =require("express");
const { customerRouter } = require("./Routes/customer_route");
const { connection } = require("./db");
const cookie=require("cookie-parser");
const { bookRouter } = require("./Routes/book_route");
const { auth } = require("./Middleware/auth");

const app=express();

app.use(express.json());
app.use(cookie())
app.use("/customer",customerRouter);

app.use(auth);
app.use("/book",bookRouter)

app.get("/",(req,res)=>{
    res.send("Working fine")
})

app.listen(8090,async()=>{
    try {
        await connection;
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running on port 8090")
})