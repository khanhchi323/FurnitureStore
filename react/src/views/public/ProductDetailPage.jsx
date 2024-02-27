import React from "react";
export default function ProductDetailPage() {
    return (
        <div className="font-sans m-0 p-0  bg-white h-screen w-full ">
            <div className="bg-gray-300 h-12 text-2xl  ">
                <div className="p-auto pt-1.5 text-center lg:text-left md:text-left lg:pl-3 md:pl-3 ">Product Detail</div>
            </div>
            <div className="flex flex-col lg:flex-row mt-8 md:flex-row items-center justify-center align-center">
                <div className="lg:w-1/2 md:w-1/2  ">
                    <img className="sm:w-64 sm:text-center m-auto h-56 w-64  lg:w-3/4 lg:h-full md:w md:h-full rounded-xl " src={Intro8} alt="Hình sản phẩm" />

                </div>

                <div className="lg:w-1/2 md:w-1/2 justify-items-center text-left lg:text-center lg:text-justify">
                    <div className="px-8 sm:px-12 ">
                        <h1 className="lg:text-3xl md:text-2xl text-xl px-0.5">Name product Name product</h1>
                        <div className="flex items-center">
                            <span className="lg:text-xl line-through text-gray-500 text-sm">1.000.000đ</span>
                            <span className=" lg:text-3xl ml-1.5 mr-2 font-bold text-black-500 text-2xl">900.000đ</span>
                            <span className="p-0.5 bg-red-700 text-xs text-white rounded px-1">giảm 10%</span>
                        </div>
                        <span className="my-3  ">Mô tả sản phẩm</span>
                        <div className="flex flex-row" >
                            <div className="w-1/3  mt-2	 ">
                                <button className="w-1/5 border border-black  " onclick="decrementQuantity()">-</button>
                                <input className="w-1/5 text-center  border border-black   " type="text" value="1" min="1" />
                                <button className="w-1/5  border border-black " onclick="incrementQuantity()">+</button>
                            </div>
                            <div className="w-1/3  text-center hover:bg-slate-700 py-2 px-0.5 hover:text-white text-base text-center bg-white text-gray-700 border-gray-600 border  ">
                                <button className="">Add to cart</button>
                            </div>
                        </div>
                        <div className="my-6 ">SKU-</div>
                        <div className="my-6 ">Category:</div>
                        <div className="w-3/4 ">
                            <p className="">Chi tiết sản phẩm</p>
                            <p className="">TextTextText Text Text Text Text Text    Text Text Text Text Text Text Text Text Tex</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}