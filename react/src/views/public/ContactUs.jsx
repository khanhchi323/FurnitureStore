import React from "react";

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4 text-center mb-20 mt-10">Contact us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 shadow-2xl">
          <h2 className="text-2xl font-bold">Phone</h2>
          <p>+84 90-591-8888</p>
          <p>+84 90-117-6565</p>
        </div>
        <div className="p-4 shadow-xl">
          <h2 className="text-2xl font-bold">Email</h2>
          <p>duongbangcay@gmail.com</p>
          <p>runway@gmail.com</p>
        </div>
        <div className="p-4 shadow-xl">
          <h2 className="text-2xl font-bold">Address</h2>
          <p>123 Hoang Hoa Tham district, Tan Binh, Ho Chi Minh City</p>
        </div>
      </div>
      <div className="p-4 shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center ">Send us a message</h2>
        <form className="grid grid-cols-2 gap-6 mt-12">
    <div className="">
        <label>Your name</label>
        <input className="block w-full border border-gray-400 p-2 rounded-xl " type="text" placeholder="Enter your full name" />
    </div>
    <div>
        <label>Email address</label>
        <input className="block w-full p-2 border border-gray-400 rounded-xl" type="email" placeholder="Enter your full name" />
    </div>
    <div>
        <label>Phone number</label>
        <input className="block w-full p-2 border border-gray-400 rounded-xl" type="tel" placeholder="Enter your full name" />
    </div>
    <div>
        <label>Company name</label>
        <input className="block w-full p-2 border border-gray-400 rounded-xl" type="text" placeholder="Enter your full name" />
    </div>
    <div className="col-span-2">
        <label>Message</label>
        <textarea className="block w-full h-24 p-2 border border-gray-400 rounded-xl" placeholder="Enter your full name"></textarea>
    </div>
    <div className="col-span-2">
        <button className="block w-full p-2 bg-blue-500 text-white">Send</button>
    </div>
</form>
      </div>
    </div>
  );
}
