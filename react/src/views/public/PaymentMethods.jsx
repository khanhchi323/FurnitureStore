import React from "react";
import COD from "../../assets/public/icon/COD.png";
import CD from "../../assets/public/icon/Creditcard.png";
import FS from "../../assets/public/icon/FS.png";

export default function EditAddress() {
    return (
        <div className="font-sans m-0 p-0 h-full px-8 flex items-center justify-center bg-gray-100">
            <div className="lg:w-1/2 md:w-1/2 sm:w-3/4 shadow-2xl p-4 my-2 bg-white ">
                <div className="bg-black text-white w-16 text-center my-2">Logo</div>
                <div className="flex text-xs text-gray-600 overflow-hidden content">
                    <p className="text-blue-400">Cart </p>
                    <p>&gt;</p>
                    <p className="truncate" > Delivery Information </p>
                    <p> &gt; </p>
                    <p className="truncate"> Payment Methods</p>
                </div>
                <b className="my-2">Payment Option</b>
                <div className="border border-gray-600 p-2 flex text-gray-800 ">
                    <input type="checkbox" class="rounded-full " />
                    <img src={COD} alt="COD-img" className="w-1/12 mx-2" />
                    <p className="text-sm ">Cash on Delivery (COD)</p>
                </div>
                <div className="border border-gray-600 p-2 flex mt-1 text-gray-800">
                    <input type="checkbox" class="rounded-full " />
                    <img src={CD} alt="COD-img" className="w-1/12 mx-2" />
                    <p className="text-sm ">Credit Card/Debit Card</p>
                </div>
                <div className="border border-gray-600 p-2 flex mt-1 text-gray-800 ">
                    <input type="checkbox" class="rounded-full " />
                    <img src={FS} alt="COD-img" className="w-1/12 mx-2" />
                    <p className="text-sm">CCHLBPay</p>
                </div>
                <div className="text-sm mt-2 w-full flex">
                    <button className="w-1/3 text-left text-gray-800">Back</button>
                    <div className="w-full ">
                        <button className="bg-blue-400 text-white p-2 text-right">Complete Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}