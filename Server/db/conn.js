const mongoose = require('mongoose');

//database string
const db=process.env.DATABASE;

//connection
mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Succesfull");
}).catch((e)=>{
    console.log(e);
})