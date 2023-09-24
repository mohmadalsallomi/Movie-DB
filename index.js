const express= require("express")
const app = express()
app.get("/",(req,res)=> {
    console.log("here")
    res.json('ok')
} )
app.get('/test',(req,res)=>{
    res.json({status:200,message:"ok it's done"})
})

app.get('/time',(req,res)=>{
    res.json({status:200, message:Date()})
})

app.listen(3000,()=>{
    console.log("connected on port 3000")
})

