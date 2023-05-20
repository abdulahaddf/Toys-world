import React from 'react';
import Marquee from 'react-fast-marquee';

const Review = () => {
    return (
        <div>
            <div>
            <div className="w-1/2 mx-auto mb-12" data-aos="zoom-out-left">
                <h3 className="font-bold text-slate-700 text-5xl text-center">Customer FeedBack</h3>
                <p className="font-bold text-center text-slate-700">Here you can see out pride cuntomer review us in different time...we are very happy fou them.</p>
            </div>
            <Marquee speed={100}>
                <div className="flex gap-10 text-slate-700" data-aos="flip-up">
                    <div className="card w-96  mx-2 my-10 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10 ">
                            <img src="https://i.ibb.co/PrJY8XX/1.jpg" alt="Shoes" className="rounded-full w-24 h-24 border-4 border-slate-700" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mark Henrey</h2>
                            <p>I Love this toys.I want to visit this market everyday and there online thransport system is so well and you can easly buy there product as a good company they make my children Happy.</p>

                        </div>
                    </div>
                    <div className="card w-96  mx-2 my-10  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10 ">
                            <img src="https://i.ibb.co/0YKvSz1/chef4.jpg" alt="Shoes" className="rounded-full w-24 h-24 border-4 border-slate-700" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Glen Maxwel</h2>
                            <p>Just take it and I Love this toys.I want to visit this market everyday and there online thransport system is so well and you can easly buy there product as a good company they make my children Happy.Keep going</p>

                        </div>
                    </div>
                    <div className="card w-96  mx-2 my-10  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10 ">
                            <img src="https://i.ibb.co/mNDKM1W/4.jpg" alt="Shoes" className="rounded-full w-24 h-24 border-4 border-slate-700" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Tim Devid</h2>
                            <p>I want to visit this market everyday and there online thransport system is so well and you can easly buy there product as a good company they make my children Happy.</p>

                        </div>
                    </div>
                    <div className="card w-96  mx-2 my-10  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10 ">
                            <img src="https://i.ibb.co/5sXr2hc/3.jpg" alt="Shoes" className="rounded-full w-24 h-24 border-4 border-slate-700" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mark Stonies</h2>
                            <p> When I first see thid ,I Love this toys.I want to visit this market everyday and there online thransport system is so well and you can easly buy there product as a good company they make my children Happy.Take Love</p>

                        </div>
                    </div>
                    <div className="card w-96  mx-2 my-10  bg-base-100 shadow-xl ">
                        <figure className="px-10 pt-10  ">
                            <img src="https://i.ibb.co/DtgLxxz/chef5.jpg" alt="Shoes" className="rounded-full w-24 h-24 border-4 border-slate-700" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mitchel Stack</h2>
                            <p> Love this toys.I want to visit this market everyday and there online thransport system is so well and you can easly buy there product as a good company they make my children Happy.Go ahead.</p>

                        </div>
                    </div>



                </div>
            </Marquee>
        </div>
        </div>
    );
};

export default Review;