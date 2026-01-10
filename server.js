const express=require('express')
// const homeContent = require('./views/src/layout/conten')
// const aboutContent=require("./views/src/layout/conten")
const { homeContent, aboutContent } = require("./views/src/layout/conten");

const app=express()
app.set("view engine","ejs")
require("dotenv").config()
const PORT=process.env.PORT||5000

app.use(express.static("Public"))

app.get("/", (req, res) => {
  res.render("src/pages/Home", {
    title: "home",
    allData: homeContent
  });
});


app.get("/about",(req,res)=>{
    res.render("src/pages/about",{
        title:"about",
        allData:aboutContent
    })
})

app.get("/contact",(req,res)=>{
    res.render("src/pages/contact",{
        title:"contact"
    })
})


app.get("/readmore",(req,res)=>{
    res.render("src/pages/readmore",{
        title:"readmore"
    })
})
app.listen(PORT,()=>console.log(`server is connected http://localhost${PORT}`))