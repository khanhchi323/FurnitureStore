import React from "react";
import { Link } from "react-router-dom";
export default function registerPage() {
    return (
        <div className="font-sans m-0 p-0 flex items-center justify-center bg-white h-screen">
            <div className="  w-96 p-20px rounded-lg shadow-lg shadow-neutral-950 z-10 ">
                <h2 className="text-2xl font-bold mb-4 text-center mt-4">
                    Create account
                </h2>
                <form>
                    <div className="mr-25px mb-20px rounded-sm flex">
                        <div className="mr-25px mb-20px rounded-sm">
                            <label
                                className="text-base ml-8 my-1.5 block"
                                for="username"
                            >
                                First name
                            </label>
                            <input
                                className="text-base w-36 pl-2 pb-0.4 ml-8 border-solid outline rounded-xl "
                                type="text"
                                id="username"
                                name="username"
                                required
                            />
                        </div>
                        <div className="mr-25px mb-20px rounded-sm ">
                            <label
                                className="text-base ml-7 my-1.5 block"
                                for="username"
                            >
                                Last name
                            </label>
                            <input
                                className="text-base w-36 pl-2 pb-0.4 ml-7 border-solid outline rounded-xl "
                                type="text"
                                id="username"
                                name="username"
                                required
                            />
                        </div>
                    </div>
                    <div className="mr-25px mb-20px rounded-sm">
                        <label
                            className="text-base ml-8 my-1.5 block"
                            for="username"
                        >
                            User name
                        </label>
                        <input
                            className="text-base w-80 pl-2 pb-0.4 ml-8 border-solid outline rounded-xl "
                            type="text"
                            id="username"
                            name="username"
                            required
                            placeholder="User name"
                        />
                    </div>
                    <div className="mr-25px mb-20px rounded-sm">
                        <label
                            className="text-base my-1.5 ml-8 block"
                            for="password"
                        >
                            Password
                        </label>
                        <input
                            className="text-base w-80 pl-2 pb-0.4 ml-8 border-solid outline rounded-xl "
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="mr-25px mb-20px rounded-sm">
                        <label
                            className="text-base ml-8 my-1.5 block"
                            for="numberphone"
                        >
                            Number Phone
                        </label>
                        <input
                            className="text-base w-80 pl-2 pb-0.4 ml-8 border-solid outline rounded-xl "
                            type="text"
                            id="numberphone"
                            name="numberphone"
                            required
                        />
                    </div>
                    <div className="mr-25px mb-20px rounded-sm">
                        <label
                            className="text-base my-1.5 ml-8 block"
                            for="email"
                        >
                            Email
                        </label>
                        <input
                            className="text-base w-80 pl-2 pb-0.4 ml-8 border-solid outline rounded-xl "
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button
                            style={{ border: "solid 2px #3A6F62" }}
                            className=" transition  bg-green-900 text-white px-[2rem] py-1 mt-3  text-lg cursor-pointer rounded-full hover:bg-white hover:text-green-800 transition-colors duration-300 ease-in-out"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                    <div className="pt-3 pb-3 text-center shadow.md">
                        Already have an account?{" "}
                        <Link to="/login" className=" text-green-800">
                            Log in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
