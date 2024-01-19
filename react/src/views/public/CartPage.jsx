import React from "react";
import Cabinet from "../../assets/product/cabinet/cabinet.svg"
// import Chair from "../../assets/product/chair/chair.svg"
// import Sofa from "../../assets/product/chair/sofa.svg"

export default function CartPage() {
    return (
        <div className=" bg-gray-100 pt-8 h-full">
            <h1 className="mb-4 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto justify-center px-6  xl:px-0m flex flex-col lg:flex lg:flex-row ">
                <div className="rounded-lg bg-white shadow-md flex lg:w-2/3 h-1/3 lg:mb-6">
                    <div className=" justify-between  rounded-lg  p-6   flex  lg:">
                        <img src={Cabinet} alt="product-image" className=" rounded-lg w-52 shadow-md  " />
                    </div>
                    <div className="text-right w-full pr-4">
                        <p className="mt-5 text-lg self-center  font-bold text-gray-900">Cabinet Xám</p>
                        <p className="mt-3 text-xs text-gray-700">CAB-GR</p>
                        <span className=" cursor-pointer rounded-l bg-gray-400 py-1.5 px-2.5 duration-100 hover:bg-red-500 hover:text-blue-50"> - </span>
                        <input className="h-8 w-8 border  bg-white text-center my-4 text-xs outline-none" type="number" value="1" min="1" />
                        <span className="cursor-pointer rounded-r bg-gray-400 py-1.5  px-2 duration-100 hover:bg-red-500 hover:text-blue-50"> + </span>
                        <p className="text-base">1.599.000đ</p>
                        {/* <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> */}
                    </div>
                </div>

                {/* <!-- Sub total --> */}
                <div className=" mt-0 h-full  rounded-lg border bg-white p-6 shadow-md lg:w-1/3 lg:ml-8 ">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">3.597.000đ</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">Shipping</p>
                        <p className="text-gray-700">450.000đ</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg text-right font-bold">4.406.700đ</p>
                            <p className="text-sm text-gray-700">including VAT(10%)</p>
                        </div>
                    </div>
                    <button className="mt-6 w-full rounded-md bg-red-400 py-1.5 font-medium text-red-50 hover:bg-red-600">Check out</button>
                </div>
            </div>
        </div>
    );
}