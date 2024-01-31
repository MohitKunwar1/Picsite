import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" w-full">
        <div className="lg:flex justify-center md:items-center ">
          <div className=" md:w-full flex justify-center">
            <div>
              <img
                className=" m-10 object-cover md:w-96 w-72 shadow-lg"
                src="https://images.unsplash.com/photo-1520549233664-03f65c1d1327?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGdhbGxlcnklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
          </div>
          <div className=" md:w-full text-center">
            <p className=" md:font-bold font-semibold text-semilg md:text-xl">
              <span className="uppercase md:text-2xl text-xl bg-amber-600 px-2 text-white rounded-xl">
                Picsite
              </span> {" "}
               your go-to platform for exploring the world through images.
               Whether you're an artist seeking inspiration, a student doing research, or simply a lover of imagery, Picsite is designed with you in mind. Dive in and start your visual journey today!”
            </p>
            <p className=" md:font-semibold md:text-lg text-sm mr-4 ">
            </p>
            <div className=" md:mt-4 m-3">
              <button
                onClick={() => navigate("/gallery")}
                className=" text-lg font-semibold px-2 py-2 bg-emerald-700 md:font-bold md:text-2xl text-white md:py-2 md:px-3 rounded-xl shadow-lg shadow-slate-600 active:scale-95 hover:bg-emerald-500"
              >
                Explore +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
