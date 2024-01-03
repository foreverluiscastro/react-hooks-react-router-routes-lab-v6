import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then((r) => r.json())
    .then((directors) => setDirectors(directors))
  }, [])

  // console.log(directors)

  const directorsList = directors.map((director)=> {

    const movieList = director.movies.map((movie) => <li key={movie}>{movie}</li>)

    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>{movieList}</ul>
      </article>
    )
  })

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directorsList}
      </main>
    </>
  );
};

export default Directors;
