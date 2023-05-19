import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PhotoGallery = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  const photos = [
      { src: "https://i.ibb.co/G26rD9M/t1.jpg"},
      { src: "https://i.ibb.co/N2ZMYNH/t2.jpg",},
      { src: "https://i.ibb.co/0r2CXdf/t3.jpg",},
      { src: "https://i.ibb.co/XbkbzFF/s1.jpg",},
    { src: "https://i.ibb.co/X35w04c/t4.jpg",},
    { src: "https://i.ibb.co/mTrxxKq/iron1.jpg",},
    { src: "https://i.ibb.co/GF6WhDV/j1.jpg",},
    { src: "https://i.ibb.co/qY3W4Z9/dark.jpg",},
    { src: "https://i.ibb.co/0pb7SM9/thor.jpg",},
    { src: "https://i.ibb.co/2njD88x/thanos.jpg",},
    { src: "https://i.ibb.co/5RvBw9c/h1.jpg"},
    { src: "https://i.ibb.co/ySvPkXT/h2.jpg",},
    { src: "https://i.ibb.co/thHFqKK/ca.jpg",},
    { src: "https://i.ibb.co/vdrwHST/sm2.jpg",},
    { src: "https://i.ibb.co/bLHMfDv/cmm.jpg",},
    { src: "https://i.ibb.co/JKzj2Fh/ds.jpg"},
    { src: "https://i.ibb.co/8xhcGnz/sp1.jpg",},
    { src: "https://i.ibb.co/Khb8g5C/f1.jpg"},
    { src: "https://i.ibb.co/XZzVh0s/ds2.jpg",},
    { src: "https://i.ibb.co/Thv37L8/venom.jpg",},
   
  ];

  return (
    <><h1 className="text-3xl md:text-5xl font-bold text-center my-10">Choose your Favorite Action Toy </h1>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-3 border">
        {photos.map((photo, index) => (
          <div
            key={index}
            className=" overflow-hidden"
          >


<div data-aos="zoom-in-down" data-aos-duration="3500" className="max-w-md">
<img
              src={photo.src}
              alt=""
              className="w-full h-auto"
             
            />
          </div>
            
          </div>
        ))}
        
      </div>
    </div></>
  );
};

export default PhotoGallery;

