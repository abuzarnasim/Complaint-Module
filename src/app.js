const express=require("express");
const path=require("path")
const app=express();
const hbs=require("hbs");
require("./db/conn");
const Index=require(`./models/registers`);
const { isTypedArray } = require("util/types");
const port=process.env.PORT || 7000;
const static_path=path.join(__dirname, "../public")
const template_path=path.join(__dirname, "../templates/views")
const partials_path=path.join(__dirname, "../templates/partials")
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);
app.get("/", (req,res) =>{
   res.render("index");
});

app.get("/index",(req,res)=>{
  res.render("index");
})
app.post("/index",async(req,res)=>{
   try{
     
         const EmployeeMessage=new Index({
            yourname:req.body.name,
            email:req.body.email,
            yourmessage:req.body.message
        })
        const registered=await EmployeeMessage.save();
        res.status(201).render("index");
   }catch(error){
      res.status(400).send(error);
   }
 })

app.listen(port, () =>{
   console.log(`server is running at port no ${port}`);
})
