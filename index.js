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

app.get('/hello/<ID>',(req,res)=>{
    res.json({status:200, message:"Hello, <ID>"()})
})

app.get('/search?s=<SEARCH>', (req, res) => {
    const { s } = req.query;
    if (s) {
        res.json({ status: 200, message: "ok", data: s });
    } else {
        res.status(500).json({ status: 500, error: true, message: "you have to provide a search" });
    }
});
