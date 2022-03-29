const express=require("express")
const mongoose=require("mongoose")
require('dotenv').config()

//import routes
const userRoutes=require('./routes/user')

//app
const app=express()

//routes middleware
app.use('/api', userRoutes)

//db
mongoose
   .connect("mongodb://127.0.0.1:27017/ecommerce", {
       useNewUrlParser: true,
      useUnifiedTopology: true
       
   })
   .then(() => console.log("Database connected"));
const port=process.env.PORT || 8000;
 app.listen(port, () =>{
     console.log(`Severe is runing on${port}`);
 })