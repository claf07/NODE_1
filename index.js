const express=require("express");
const mongoose=require('mongoose');
const app=express();
const dotenv=require('dotenv');
app.use(express.json());
dotenv.config();
const stud_routes=require('./routes/details.routes');
app.use('/api/details',stud_routes);



app.listen(3000,()=>{
    console.log("Server is running at port 3000");
});
mongoose.connect(process.env.MONGOOSE_STRING)
.then(()=>{
    console.log("Connected Successfully");
})
.catch((err)=>{
    console.log("Connection Failed:",err);
})

