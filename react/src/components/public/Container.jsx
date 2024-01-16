import React from "react";
import { Link } from "react-router-dom";
import Intro4 from "../../assets/public/banner/intro4.svg"

export default function Container() {
    return (
        <div className="bg-[#2D2D1F] py-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div className="col-start-1 col-end-3 ">
                        <b className="font-bold text-white text-2xl ">
                            Design your dream home with the perfect furniture.
                        </b>
                        <p className="text-white pr-8">
                            We're making it easy for you to find your perfect
                            match.
                        </p>
                    </div>

                    <div className="col-end-6 col-start-5">
                        <img 
                            classNamw = "w-[100vh] h-[700px]"
                            src={Intro4}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
