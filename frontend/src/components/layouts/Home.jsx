import React from 'react'
import CountREstaurents from './CountRestaurents';
import Restaurents from './Restaurents';


export default function Home() {
  return (
    <>
      <CountREstaurents/>
      <section>
        <div className="sort">
          <button className="sort_veg p-3">Pure Veg</button>
          <button className="sort_rev p-3">Sort by Review</button>
          <button className="sort_rate p-3">Sort by Rating</button>
        </div>
        <div className="row mt-4">
          <Restaurents />
          <Restaurents />
          <Restaurents />
          <Restaurents />
          <Restaurents />
          <Restaurents />
          <Restaurents />
          <Restaurents />
          </div>
      </section>
    </>
  );
}
