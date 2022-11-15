const mongoose = require("mongoose");
const db="mongodb://localhost:27017/EmployeeMessage";
mongoose.connect(db,{
   useNewUrlParser:true,
   useUnifiedTopology:true
}).then(() =>{
   console.log("Connection Successfull");
}).catch((error) =>{
   console.log("no connect");
})