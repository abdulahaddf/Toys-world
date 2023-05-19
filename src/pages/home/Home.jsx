import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import PhotoGallery from "../../shared/components/PhotoGallery";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
     
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/LNnjFs7/allHero.jpg")`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-70"></div>
        <div className="hero-content w-1/2 text-neutral-content">
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

      
        <PhotoGallery></PhotoGallery>
      
      
    </div>
  );
};

export default Home;
