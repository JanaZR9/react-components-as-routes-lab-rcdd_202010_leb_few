import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
       <div>
         {directors.map((director, i) => (
          <div key={i}>
              <h3>Name: {director.title}</h3>
              <p> Movies:</p>
              <ul>
                  {director.movies.map((movie, j) => (
                      <li key={j}>{movie}</li>
                  ))}
              </ul>
          </div>
      ))}
        </div>
    </div>
  );
}

export default Directors
