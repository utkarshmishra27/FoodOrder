import React from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";

export default function FoodItem() {
  return (
    
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img src="https://b.zmtcdn.com/data/dish_photos/63a/0ee7fc1c07ba544aa82ed382c098563a.jpg?output-format=webp" alt="Biryani" className="card-img-top mx-auto" />
            
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">Chicken Biryani</h5>
                <p className="fooditem_des">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <p className="card-text">
                <LiaRupeeSignSolid /> 
                350
                <br />
                </p>
                <button type='button' id='cart_btn' className="btn btn-primary d-inline ml-4">Add to Cart</button><br />
                <p>Status: <span id="stock_status" className = {10 > 5 ? "greenColor" : "redColor"}>
                    { 10 > 5 ? "In Stock" : "Out Of Stock"}
                </span>
                </p>
            </div>
        </div>
        </div>
  )
}
