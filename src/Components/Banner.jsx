import React from 'react';
import bookImg from '../assets/tom-kitto-mNugyJ5IKwo-unsplash.jpg'
import Books from './Books';
const Banner = () => {
    return (
     <>
        <div className='flex justify-between items-center ml-20 mr-20'>
            <div>
               <h1 className='text-6xl font-semibold'> BookCourier - <br />
                Library to Home <br />
                Delivery System</h1>

                <p className='mt-5'>
                    Borrow and return books from your <br />
                    favourite library without visiting physically
                </p>

                <button className="btn btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-5">Get Strated</button>
            </div>

            <div>
                <img className='w-140 h-100 rounded-xl' src={bookImg} alt="" />
            </div>
        </div>
        <Books></Books>
     </>
    );
};

export default Banner;