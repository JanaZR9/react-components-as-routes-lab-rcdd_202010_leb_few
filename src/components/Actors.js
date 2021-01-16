import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
     <h1>Actors Page</h1>
 <div>
         {actors.map((actor, i) => (
          <div key={i}>
              <h3>Name: {actor.title}</h3>
              <p> Movies:</p>
              <ul>
                  {actor.movies.map((movie, j) => (
                      <li key={j}>{movie}</li>
                  ))}
              </ul>
          </div>
      ))}
        </div>
    </div>
  );
};

export default Actors;
