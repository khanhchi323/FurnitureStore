import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import COD from "../../assets/public/icon/COD.png";
import CD from "../../assets/public/icon/Creditcard.png";
import FS from "../../assets/public/icon/FS.png";

export default function PaymentMethods() {
    const [selectedOption, setSelectedOption] = useState(null);
    const history = useHistory();

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleBackButtonClick = () => {
        history.push("/cart-item");
    };

    const handleCompleteOrderButtonClick = () => {
        if (selectedOption === "COD") {
            console.log("Cash on Delivery selected. Redirecting to success page...");
            history.push("/payment-success");
        } else {
            // Gửi mã vạch ra màn hình
            console.log("Sending barcode for payment...");
            // Sau khi gửi mã vạch, chuyển đến trang thanh toán thành công
            history.push("/payment-success");
        }
    };

    return (
        <div className="font-sans m-0 p-0 h-full px-8 flex items-center justify-center bg-gray-100">
            <div className="lg:w-1/2 md:w-3/5 sm:w-3/4 shadow-2xl p-4 my-2 lg:px-10 bg-white ">
                <div className="bg-black text-white w-16 text-center my-2">Logo</div>
                <div className="flex text-xs text-gray-600 overflow-hidden content">
                    <p className="text-blue-400">Cart </p>
                    <p>&gt;</p>
                    <p className="truncate" > Delivery Information </p>
                    <p> &gt; </p>
                    <p className="truncate"> Payment Methods</p>
                </div>
                <b className="md:text-2xl text-lg m-">Payment Option</b>
                <div className="border border-gray-600 p-2 flex text-gray-800 mt-4 ">
                    <input
                        type="checkbox"
                        checked={selectedOption === "COD"}
                        onChange={() => handleOptionChange("COD")}
                        className="rounded-full "
                    />
                    <img src={COD} alt="COD-img" className="w-1/12 mx-2" />
                    <p className="text-sm lg:text-base self-center">Cash on Delivery (COD)</p>
                </div>
                <div className="border border-gray-600 p-2 flex mt-1 text-gray-800">
                    <input
                        type="checkbox"
                        checked={selectedOption === "CD"}
                        onChange={() => handleOptionChange("CD")}
                        className="rounded-full "
                    />
                    <img src={CD} alt="COD-img" className="w-1/12 mx-2" />
                    <p className="text-sm lg:text-base self-center ">Credit Card/Debit Card</p>
                </div>
                <div className="border border-gray-600 p-2 flex mt-1 text-gray-800 ">
                    <input
                        type="checkbox"
                        checked={selectedOption === "FS"}
                        onChange={() => handleOptionChange("FS")}
                        className="rounded-full "
                    />
                    <img src={FS} alt="COD-img" className="w-1/12 mx-2" />
                    <p className="text-sm lg:text-base   self-center">FSPay</p>
                </div>
                <div className="text-sm mt-2 w-full flex ">
                    <div className="w-full">
                        <button onClick={handleBackButtonClick} className="w-1/3 p-2 text-left text-gray-800 ml-2 text-center rounded-full border border-black">Back</button>
                    </div>
                    <div className="w-full text-right">
                        <button onClick={handleCompleteOrderButtonClick} className="bg-blue-400 text-white p-2 ">Complete Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
