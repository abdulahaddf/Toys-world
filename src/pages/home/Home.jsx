import React, { useEffect } from "react";
// import React,{useEffect} from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/7jXXpKy/59950734942.png")`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div data-aos="fade-up" data-aos-duration="3100" className="max-w-md">
            <h1 className="mb-5 text-5xl font-extrabold">
              Welcome to the World of Action Toys
            </h1>
            <p className="mb-5 text-2xl font-bold">
              Find any kind of action toys here
            </p>
            <button className="btn btn-slate bg-white text-black font-bold">
              Explore
            </button>
          </div>
        </div>
      </div>

      

      
      
    </div>
  );
};

export default Home;
