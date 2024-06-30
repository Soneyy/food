import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  bg-secondary-300">
      <div div className="w-full max-w-lg bottom-4 border-primary ">
        <h1 className="flex justify-center text-5xl font-bold mb-8 text-primary">
          {" "}
          Contact Page
        </h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-secondary-200 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="  b_glow shadow appearance-none border rounded w-full py-2 px-3 text-secondary-200 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-secondary-200 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="  b_glow shadow appearance-none border rounded w-full py-2 px-3 text-secondary-200 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-secondary-200 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="  b_glow shadow appearance-none border rounded w-full py-2 px-3 text-secondary-200 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              rows="6"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-primary  hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  w-40"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
