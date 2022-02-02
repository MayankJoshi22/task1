const express = require("express");
// const mysql = require("mysql");
const userRouter = require("./routes/user.router");
const productRouter = require("./routes/product.router");
require('dotenv').config()
const app = express();

const PORT = process.env.PORT;


app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/products",productRouter)

app.listen(PORT,()=>{
    console.log(`server is up on port ${PORT}`);
})