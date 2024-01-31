import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" w-full h-screen  ">
        <div>
          <img src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="background image" className="w-full h-12 md:h-24  object-cover " />
        </div>
        <div className="text-center mt-3 md:mt-10">
          <h1 className="font-semibold  text-2xl md:font-bold md:text-5xl">Hi, how can we help you?</h1>
          <p className=" md:font-semibold md:text-lg font-light">
            Want get in touch with us you are in the right place!
          </p>
            <div className=" flex justify-center text-left mt-5 md:mt-10">
              <form className="">
                <label
                  htmlFor="name"
                  className="block md:text-lg md:font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="mt-1 block md:w-96 w-72 py-2 px-3 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700 sm:text-sm"
                />
                <label
                  htmlFor="email"
                  className="block md:text-lg md:font-medium text-gray-700 mt-3 md:mt-5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="mt-1 block md:w-96 w-72 py-2 px-3 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700 sm:text-sm"
                />

                <label
                  htmlFor="reason"
                  className="block md:text-lg md:font-medium text-gray-700 mt-5"
                >
                  Reason
                </label>
                <select
                  id="reason"
                  className="mt-1 block md:w-96 w-72 py-2 px-3 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700 sm:text-sm font-light "
                >
                  <option>Select a reason</option>
                  <option value="reason1">Image Quality</option>
                  <option value="reason2">Image Orientation</option>
                  <option value="reason3">Image License Type</option>
                  <option value="reason4">Images Color</option>
                </select>
                <label
                  htmlFor="details"
                  className="block md:text-lg md:font-medium text-gray-700 mt-5"
                >
                  Details
                </label>
                <textarea
                  id="details"
                  cols="30"
                  rows="5"
                  className="mt-1 block md:w-96 w-72 py-2 px-3 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-amber-700 focus:border-amber-700 sm:text-sm"
                ></textarea>
                <button className=" md:font-bold text-white bg-amber-600 p-2  rounded-lg hover:bg-amber-500 mt-5 ">
                  Submit request
                </button>
              </form>
            </div>
          </div>
        </div>
    </>
  );
};

export default Contact;
