import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 min-[500px]:pl-[80px]"
    >
      <form
        method="POST"
        action="https://getform.io/f/b7cd3d79-fe52-4df6-aa84-5620a376458d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[rgb(223,162,32)]  text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            //Submit the form below or contact me via email -
            bilalahsan041@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="Message"
          rows="10"
          placeholder="Enter your message"
        ></textarea>
        <button
          className="text-white border-2 hover:bg-[rgb(223,162,32)] hover:border-[rgb(223,162,32)]  px-4 py-3 my-8
            mx-auto flex items-center"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
