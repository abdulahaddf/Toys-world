import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/7jXXpKy/59950734942.png")`,
        }}
      >
        <div className="hero-overlay bg-slate-900 bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-extrabold">Welcome to the World of Action Toys</h1>
            <p className="mb-5 text-2xl font-bold">
              Find any kind of action toys here
            </p>
            <button className="btn btn-slate bg-white text-black font-bold">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
