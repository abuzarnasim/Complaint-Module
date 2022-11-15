const mongoose=require("mongoose");
const employeeSchema=new mongoose.Schema({
    yourname:{
        type:Array,
        required:[true,"yourname is required"]
    },
    email:{
        type:Array,
        required:[true,"email is required"],
        unique:true
    },
    yourmessage:{
        type:Array,
        required:[true,"yourmessage is required"]
    }})
    

//now we need to create collection

const Index=new mongoose.model("EmployeeMessage",employeeSchema);
module.exports=Index;