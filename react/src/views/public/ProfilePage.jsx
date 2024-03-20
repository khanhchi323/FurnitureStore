import React from "react";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProfilePage() {
    // const [userData, setUserData] = useState(null);

    // useEffect(() => {
    //     fetch("https://example.com/api/userdata")
    //         .then(response => response.json())
    //         .then(data => setUserData(data))
    //         .catch(error => console.error("Error fetching user data:", error));
    // }, []);

    return (
        <div className="font-sans m-0 p-0 min-h-screen bg-cover bg-no-repeat">
            <div className="bg-teal-700 w-full h-1/3 hidden sm:block">
                <h2 className="p-16 pt-12 text-3xl text-white ">Individual Profile</h2>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center mt-10">
                    <div className="text-center">
                        <div className="flex items-center justify-center">
                            {/* {userData && <img className="w-48 h-48 rounded-full md:mt-[-100px]" src={userData.imageURL} alt="#" />} */}
                        </div>
                        <h2 className="text-4xl m-2.5 mb-2">{userData && userData.name}</h2>
                        <h3 className="text-xl m-2.5 mt-1.5 text-slate-600">{userData && userData.address}</h3>
                        <Link to="/EditProfile" className="bg-teal-800 text-white px-3 py-1 mt-3 text-lg cursor-pointer rounded-full hover:bg-green-700">Edit Profile</Link>

                        <div className="h-0.5 w-6/7 bg-slate-400 mt-3 mx-auto"></div>

                        <div className="mt-4">
                            <div className="flex flex-col sm:flex-row items-center">
                                <label className="text-2xl m-1 mb-5 sm:mb-0 sm:mr-10">Date of birth:</label>
                                <div className="text-xl mb-2 sm:mb-0 sm:mr-2 p-1 border rounded">{userData && userData.dateOfBirth}</div>
                            </div>

                            <div className="flex items-center m-1 mb-2">
                                <label htmlFor="address" className="text-2xl mr-2 sm:mr-1">Address: </label>
                                <div className="p-2 border rounded-md flex-grow">{userData && userData.address}</div>
                            </div>

                            <div className="flex items-center m-1 mb-2">
                                <label htmlFor="email" className="text-2xl mr-2 sm:mr-1">Mail:</label>
                                <div className="p-2 border rounded-md flex-grow">{userData && userData.email}</div>
                            </div>

                            <div className="flex items-center m-1 mb-2">
                                <label htmlFor="phone" className="text-2xl mr-2">Số điện thoại:</label>
                                <div className="p-2 border rounded-md flex-grow">{userData && userData.phoneNumber}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
