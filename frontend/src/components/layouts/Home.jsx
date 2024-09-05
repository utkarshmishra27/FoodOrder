import React, { useEffect } from 'react'
import CountRestaurents from './CountRestaurents';
import Restaurents from './Restaurents';
import { getRestaurants } from '../../actions/restaurantAction';
import { useDispatch } from 'react-redux';


export default function Home() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getRestaurants());
  },[dispatch]);



  return (
    <>
      <CountRestaurents/>
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
