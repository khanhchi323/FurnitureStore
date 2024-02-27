import React from "react";
import {Link} from "react-router-dom"

export default function ProfilePage() {
    return (
        <div className="font-sans m-0 p-0 min-h-screen bg-cover bg-no-repeat">
            <div className="bg-teal-700 w-full h-1/3 hidden sm:block">
                <h2 className="p-16 pt-12 text-3xl text-white ">Individual Profile</h2>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center mt-10">
                    <div className="text-center">
                        <div className="flex items-center justify-center">
                            <img className="w-48 h-48 rounded-full md:mt-[-100px]" src="src/assets/public/bg1.jpg" alt="#" />
                        </div>
                        <h2 className="text-4xl m-2.5 mb-2">Đừu Mạnh Lam</h2>
                        <h3 className="text-xl m-2.5 mt-1.5 text-slate-600">Hồ Chí Minh - Việt Nam</h3>
                        <Link to ="/EditProfile" className="bg-teal-800 text-white px-3 py-1 mt-3 text-lg cursor-pointer rounded-full hover:bg-green-700">Edit Profile</Link>

                        <div className="h-0.5 w-6/7 bg-slate-400 mt-3 mx-auto"></div>

        <div className="mt-4">
          <div className="flex flex-col sm:flex-row items-center">
           <label className="text-2xl m-1 mb-5 sm:mb-0 sm:mr-10">Date of birth:</label>
                <select className="text-xl mb-2 sm:mb-0 sm:mr-2 p-1 border rounded">
                     <option>1</option>
                </select>
                <select className="text-xl mb-2 sm:mb-0 sm:mr-2 p-1 border rounded">
                     <option>1</option>
                </select>
                <select className="text-xl p-1 border rounded">
                     <option>2003</option>
                </select>
        </div>
                                     
        <div className="flex items-center m-1 mb-2">
          <label for="address" className="text-2xl mr-2 sm:mr-1">Address: </label>
          <input id="address" type="text" className="p-2 border rounded-md flex-grow " placeholder="Enter your address" />
        </div>
                            
        <div className="flex items-center m-1 mb-2">
          <label for="email" className="text-2xl mr-2 sm:mr-1">Mail:</label>
          <input id="email" type="email" className="p-2 border rounded-md flex-grow" placeholder="Enter your mail" />
        </div>                            

        <div className="flex items-center m-1 mb-2">
           <label for="phone" className="text-2xl mr-2">Số điện thoại:</label>
           <input id="phone" type="tel" className="p-2 border rounded-md flex-grow" placeholder="Enter your phone" />
        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
