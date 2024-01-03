import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then((r) => r.json())
    .then((actors) => setActors(actors))
  }, [])

  const actorsList = actors.map((actor) => {

    const moviesList = actor.movies.map((movie) => <li key={movie}>{movie}</li>)

    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          {moviesList}
        </ul>
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
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actorsList}
      </main>
    </>
  );
};

export default Actors;
