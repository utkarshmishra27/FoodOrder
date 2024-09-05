import React, { useEffect } from 'react'
import CountRestaurents from './CountRestaurents';
import Restaurant from './Restaurant';
import { getRestaurants } from '../../actions/restaurantAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';

export default function Home() {
  const dispatch = useDispatch();
  const {loading: restaurantsLoading, error: restaurantsError, restaurants} = useSelector((state) => state.restaurants)

  useEffect(() => {
    dispatch(getRestaurants());
  },[dispatch]);



  return (
    <>
      <CountRestaurents/>
      {restaurantsLoading ? (<Loader/>): restaurantsError ? (<Message variant = "danger">{restaurantsError}</Message>):(
        <>
        <section>
        <div className="sort">
          <button className="sort_veg p-3">Pure Veg</button>
          <button className="sort_rev p-3">Sort by Review</button>
          <button className="sort_rate p-3">Sort by Rating</button>
        </div>
        <div className="row mt-4">
            {restaurants ? restaurants.map((restaurant) =>(<Restaurant key={restaurant._id} restaurant={restaurant}/>)): null}
          </div>
      </section> </>)}
      
    </>
  );
}
