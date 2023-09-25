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
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
];

app.get('/movies/read', (req, res) => {
    res.json({ status: 200, data: movies });
});

app.get('/movies/read/by-date', (req, res) => {
    const moviesByDate = movies.sort((a, b) => a.year - b.year);
    res.json({ status: 200, data: moviesByDate });
});


app.get('/movies/read/by-rating', (req, res) => {
    const moviesByRating = movies.sort((a, b) => b.rating - a.rating);
    res.json({ status: 200, data: moviesByRating });
});


app.get('/movies/read/by-title', (req, res) => {
    const moviesByTitle = movies.sort((a, b) => a.title.localeCompare(b.title));
    res.json({ status: 200, data: moviesByTitle });
});