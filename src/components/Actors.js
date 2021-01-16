import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const allActors = actors.map(actor => {
    return (
      <div>
        <h3>Name: {actor.name}</h3>
        <p>Movies:
          <ul>
            {actor.movies.map(movie=><li>{movie}</li>)}
          </ul>
        </p>
      </div>
    )
  })
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {allActors}
    </div>
  );
};
export default Actors