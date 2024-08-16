import React from 'react'
import './header.css';

import Search from './Search';
export default function Header() {
    return (
        <nav className="navbar row sticky-top">
            <div className="col-12 col-md-2">
                <img src="/images/logo.webp" alt="Logo" className="logo" />
            </div>
            <div className="col-12 col-md-7 mt-0 mt-md-0">
                <Search />
            </div>
            <div>
            <div className="cart">
                <span className="ml-3" id="cart">
                    Cart
                </span>
                <span className='ml-1' id='cart_count'>0</span>
                {10 > 5 ? (
                    <>
                        <div className="m-4 dropdown d-inline">
                            <figure className='avatar avatar-nav'><img src='./images/images.png' alt='avatar' className='rounded-circle' /></figure>
                            <span style={{ color: "white", fontWeight: "bolder" }}>Utkarsh</span>
                        </div>
                    </>
                ) : (
                    <div className="btn ml-4" id="login_btn">
                        LOGIN
                    </div>
                )

                }
            </div>

        </div>

    </nav>
);

}

