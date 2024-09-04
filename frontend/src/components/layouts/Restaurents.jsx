import React from 'react'

export default function Restaurents() {
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
        <div className="card p-3 rounded">
          <img src="https://b.zmtcdn.com/data/pictures/chains/3/1703/a874f7c243aa43edd6aa9893c482d400_o2_featured_v2.jpg?output-format=webp" alt="Tunday Kababi" />
          <div className="card-body d-flex flex-column">
            <h5 className="card title">Tunday Kababi</h5>
            <p className="rest_address">123 Street, Place, City- 123456, State</p>

            <div className="rating-outer">
              <div className="rating-inner"></div>
              <span id="no_of_reviews">(140 Reviews)</span>
              
            </div>
          </div>
        </div>
    </div>
  )
}
