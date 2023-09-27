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
app.get('/movies/read/id/:id', (req, res) => {
  const moviesid = parseInt(req.params.id);
  const movie = movies[moviesid - 1]; 
  if (!movie) {
    res.status(404).json({
      status: 404,
      error: true,
      message: `the movie ${moviesid} does not exist`,
    });
  } else {
    res.status(200).json({
      status: 200,
      data: movie,
    });
  }
});

app.get('/movies/add', (req, res) => {
  const { title, year, rating } = req.query;
  if (!title || !year || isNaN(year) || year.length !== 4) {
    res.status(403).json({
      status: 403,
      error: true,
      message: 'You cannot create a movie without providing a title and a valid 4-digit year',
    });
    return;
  }
  const newRating = rating || 4;
  const newMovie = {
    title: title,
    year: parseInt(year),
    rating: parseFloat(newRating),
  };
  movies.push(newMovie);
  res.status(200).json({
    status: 200,
    data: movies,
  });
});



app.get('/movies/delete/:id', (req,res)=>{
  const {id}=req.params;
  if(id>movies.length || id<1){
      res.status(404).json({status:404, error:true, message:`The movie ${id} does not exist`})
  } else{
      movies.splice(id-1, 1);
      res.status(200).json(movies)
  }
})


