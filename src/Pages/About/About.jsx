import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1525498128493-380d1990a112?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8fDA%3D"
            alt="Background Image"
            className="w-auto h-screen md:h-min opacity-40 object-cover shadow-lg"
          />
          <div className="absolute top-0 left-0 p-5 text-center  ">
            <h1 className=" text-center font-bold text-xl md:text-6xl mix-blend-screen md:mt-10">ABOUT</h1>
            <h3 className=" text-center mt-2 text-sm md:mt-4 md:text-2xl font-extrabold mix-blend-screen">Hello! My name is Mohit Kunwar</h3> 
            <p className=" text-center mt-3 md:mt-10 text-sm md:text-xl font-semibold md:font-bold leading-tight ">
              Picsite is a image website built
              to showcase my skills and knowledge in frontend development. The
              primary purpose of this project was to create an intuitive and
              user-friendly platform that provides high-quality images by
              fetching data from the Lorem Picsum API.
              The project was developed using a modern tech stack including
              React.js for building the user interface, JavaScript for
              functionality, and Tailwind CSS for responsive and elegant design.
              One of the main challenges faced
              during the development of Picsite was optimizing the website's
              performance and accessibility. This was successfully overcome by
              learning and implementing React hooks like `useLoaderData` and
              `useNavigator`, which significantly improved the site's loading
              times and user navigation experience. Picsite stands as a
              testament to my continuous learning journey and my ability to
              adapt and implement new technologies for creating efficient and
              optimized web applications.
              <br/>
              For source click on the Github!
            </p>
            <button className=" p-2 bg-emerald-700 rounded-lg text-white mt-5 active:scale-95 hover:bg-emerald-600"><Link to={"https://github.com/MohitKunwar1/Picsite"} target="_blank" >Github</Link></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
