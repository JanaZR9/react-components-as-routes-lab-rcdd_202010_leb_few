import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
       <div>
         {directors.map(director => (
              <h3>Name: {director.title}</h3>
              <p> Movies:</p>
              <ul>
                  {director.movies.map(movie=> (
                      <li>{movie}</li>
                  ))}
              </ul>
      ))}
        </div>
    </div>
  );
}

export default Directors
