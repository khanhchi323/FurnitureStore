import React from "react";
import Cabinet from "../../assets/public/CateProduct/cabinet.svg"
import Chair from "../../assets/public/CateProduct/chair.png"

export default function OrderHistory() {
    // const [isInvoiceVisible, setIsInvoiceVisible] = useState(false);

    // const toggleInvoiceVisibility = () => {
    //     setIsInvoiceVisible(!isInvoiceVisible);
    // };
    return (
        <div className="font-sans m-0 p-0 h-full w-full flex items-center justify-center bg-gray-100">
            <div className="shadow-2xl p-4 m-2 bg-white md:w-3/4 md:px-8">
                <div>
                    <b className="text-lg md:text-2xl">Order History</b>
                    <p className="text-xs text-gray-600">Check the status of recent and old orders and discover more products</p>
                </div>
                <div className="lg:flex mt-4">
                    <div className="flex">
                        <p className="text-sm text-gray-600 truncate mr-3">Order ID: <b className="text-black">0905161630</b></p>
                        <p className="text-sm text-gray-600 truncate mr-3">Date: <b className="text-black">24 Jan, 2024</b></p>
                    </div>
                    <p className="text-sm text-gray-600 truncate">Order Status: <b className="text-black">Waiting for Shipping</b></p>
                </div>
                <div className="bg-gray-400 h-px mt-2 mb-4"></div>
                <div className="flex ">
                    <img src={Cabinet} alt="product-img" className=" md:w-1/6" />
                    <div className="text-xs md:text-base mx-3 mt-2">
                        <b className="md:text-lg">Cabinet</b>
                        <p className="text-gray-600">Grey</p>
                        <br />
                        <p className="text-gray-800">1.599.000đ</p>
                    </div>
                    <div className="text-xs flex flex-col ml-12 md:ml-4 sm:block  sm:text-right sm:self-center w-full mt-2 text-gray-600">
                        <button className="sm:mr-8 text-left">View Product</button>
                        <button className="truncate mt-2 text-left">Similar Product</button>
                    </div>
                </div>
                <div className="flex ">
                    <img src={Cabinet} alt="product-img" className="md:w-1/6" />
                    <div className="text-xs md:text-base mx-3 mt-2">
                        <b className="md:text-lg">Cabinet</b>
                        <p className="text-gray-600">Grey</p>
                        <br />
                        <p className="text-gray-800">1.599.000đ</p>
                    </div>
                    <div className="text-xs flex flex-col ml-12 md:ml-4 sm:block  sm:text-right sm:self-center w-full mt-2 text-gray-600">
                        <button className="sm:mr-8 text-left">View Product</button>
                        <button className="truncate mt-2 text-left">Similar Product</button>
                    </div>
                </div>
                <div className="md:w-1/4 ml-auto text-right">
                    <button  className="text-sm font-bold   border border-gray-500 border-2 rounded p-1">View Invoice</button>
                    {/* onClick={toggleInvoiceVisibility} */}
                </div>
                <div className="lg:flex w-full mt-4">
                    <div className="flex">
                        <p className="text-sm text-gray-600 truncate mr-3">OrderID: <b className="text-black">0905161630</b></p>
                        <p className="text-sm text-gray-600 truncate mr-3">Date: <b className="text-black">24 Jan, 2024</b></p>
                    </div>
                    <p className="text-sm text-gray-600 truncate">Order Status: <b className="text-black">Waiting for Shipping</b></p>
                </div>
                <div className="bg-gray-400 h-px mb-4 mt-2"></div>
                <div className="flex ">
                    <img src={Cabinet} alt="product-img" className=" md:w-1/6" />
                    <div className="text-xs md:text-base mx-3 mt-2">
                        <b className="md:text-lg">Cabinet</b>
                        <p className="text-gray-600">Grey</p>
                        <br />
                        <p className="text-gray-800">1.599.000đ</p>
                    </div>
                    <div className="text-xs flex flex-col ml-12 md:ml-4 sm:block  sm:text-right sm:self-center w-full mt-2 text-gray-600">
                        <button className="sm:mr-8 text-left">View Product</button>
                        <button className="truncate mt-2 text-left">Similar Product</button>
                    </div>
                </div>
                <div className="flex ">
                    <img src={Cabinet} alt="product-img" className=" md:w-1/6" />
                    <div className="text-xs md:text-base mx-3 mt-2">
                        <b className="md:text-lg">Cabinet</b>
                        <p className="text-gray-600">Grey</p>
                        <br />
                        <p className="text-gray-800">1.599.000đ</p>
                    </div>
                    <div className="text-xs flex flex-col ml-12 md:ml-4 sm:block  sm:text-right sm:self-center w-full mt-2 text-gray-600">
                        <button className="sm:mr-8 text-left">View Product</button>
                        <button className="truncate mt-2 text-left">Similar Product</button>
                    </div>
                </div>
                <div className=" ml-auto text-right">
                    <button className="text-sm font-bold border border-gray-500 border-2 rounded p-1">View Invoice</button>
                </div>
                <div className="bg-gray-400 h-px mb-8 mt-4"></div>
            </div>
        </div>
    );
}
