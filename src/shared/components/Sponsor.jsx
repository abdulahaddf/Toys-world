import React from 'react';

const Sponsor = () => {
    return (
        <div>
        <div className="w-1/2 mx-auto mb-12 mt-12">
            <h3 className="font-bold text-teal-700 text-4xl text-center" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"> International  Colabration </h3>
            <p className="font-bold text-center text-teal-700" data-aos="zoom-out-right">Here you can see out pride customer review us in different time...we are very happy fou them.</p>

        </div>
        <div className='mb-12'>
            <div className=' '>
                <div className='md:flex justify-around gap-6 ' data-aos="flip-right">
                    <img className='w-36 sponsor' src="https://i.ibb.co/g3t2Np1/c1.jpg" alt="" />
                    <img className='w-36 sponsor' src="https://i.ibb.co/pxX3kbr/c2.png" alt="" />
                    <img className='w-36 sponsor' src="https://i.ibb.co/1fVbrny/c3.webp" alt="" />
                    <img className='w-36 sponsor' src="https://i.ibb.co/2tQbYtr/c7.png" alt="" />
                </div>
                <div className='md:flex justify-around mt-6' data-aos="zoom-in-down">
                    <img className='w-36 sponsor' src="https://i.ibb.co/m0DNdB7/c10.jpg" alt="" />
                    <img className='w-36 sponsor' src="https://i.ibb.co/P6sYCbb/c5.png" alt="" />
                    <img className='w-36 sponsor' src="https://i.ibb.co/NY96Rww/c6.png" alt="" />
                    <img className='w-36 sponsor' src="https://i.ibb.co/jVJG6c1/c8.png" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Sponsor;