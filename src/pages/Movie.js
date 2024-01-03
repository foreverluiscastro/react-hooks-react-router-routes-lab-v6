import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {

  const params = useParams();

  
  const [movie, setMovie] = useState();
  
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${params.id}`)
    .then((r) => r.json())
    .then((movie) => setMovie(movie))
  },[])

  // console.log(movie)
  // kept running into an issue where the component is trying to render before the request is completed. This renders Loading.. until the state has been set
  if (movie === undefined) return <h1>Loading..</h1>
  // destructure state obj for easier use
  const { title, time, genres, id } = movie
  // 
  const genreSpans = genres.map((genre) => <span key={genre}>{genre}</span>)

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Movie info here! */}
        <h1>Title: {title}</h1>
        <p><b>Runtime:</b> {time} minutes</p>
        <b>Genres:</b> {genreSpans}
      </main>
    </>
  );
};

export default Movie;
