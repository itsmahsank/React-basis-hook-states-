import React from 'react';
import seriesData from "../api/seriesData.json";
import { SeriesCard } from './SeriesCard';


export const NetflixSeries = () => {
  return (
    <ul className='grid grid-three--cols '>
      {
        seriesData.map((val) => {
          return (

            <SeriesCard  val={val} key={val.id} />
           
          )
        })
      }
    </ul>
  );
};
