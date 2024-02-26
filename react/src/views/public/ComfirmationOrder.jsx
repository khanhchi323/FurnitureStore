import React from "react";


export default function ComfirmationOrder() {
    return (
        <div className="bg-white">
            <div className="mb-8">
                <nav className="flex space-x-4 justify-center mt-6">
                    <a  className="text-gray-500">Cart </a>
                    <a  className="text-gray-500">Personal Information</a>
                    <a  className="text-gray-500">Shipping Address</a>
                    <a  className="text-gray-500">Payment Method</a>
                    <span className="font-semibold text-black-600">Confirmation</span>
                </nav>
            </div>
        <div className="container mx-auto px-4 sm:px-6 w-1/2 lg:px-8 py-12 shadow-2xl">
            
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="mt-4 bg-gray-300 text-black px-6 py-2 rounded mb-8">View Invoice</button>
              </div>
            <div className="text-center">
                <h2 className="text-2xl font-semibold">We received your order!</h2>
                <p className="mt-2">Your order #1609203 is completed and ready to ship.</p>
                <div className="bg-gray-300 w-full h-px mt-6" ></div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                    <h3 className="text-xl font-semibold">Shipping Address</h3>
                    <p>Đừu Mạnh Lam</p>
                    <p>Binh Thanh District</p>
                    <p>100 Binh Quoi, Thanh Da, Ho Chi Minh City</p>
                </div>
                <div className="ml-12">
                    <h3 className="text-xl font-semibold ">Payment Info</h3>
                    <p>Credit Card</p>
                    <p>VISA **** 2222</p>
                </div>
            </div>
             <div className="mt-12">
             <div className="bg-gray-300 w-full h-px mt-2" ></div>
            <h3 className="text-xl normal-font-weight mb-4">Order Items</h3> 
            {[
    { name: "Item", color: "grey", price: "$69.00", image: "src/assets/product/cabinet/cabinet.svg" },
    { name: "Lamp", color: "black", price: "$50.00", image: "src/assets/product/lamp/lamp.svg" },
    { name: "Sofa", color: "green", price: "$400.00", image: "src/assets/product/chair/sofa.svg" },
].map((item, index) => (
    <div key={index} className="flex justify-between items-center mb-4">
        <div className="flex items-center">
            <img src={item.image} alt={item.name} width={70} height={70} /> {/* Tăng kích thước hình ảnh */}
            <div className="ml-4 flex flex-col items-start">
                <span className="font-bold">{item.name}</span>
                <span className="text-gray-500">{item.color}</span>
            </div>
        </div>
        <span className="font-bold">{item.price}</span> 
    </div>
))}
        </div>
        <div className="bg-gray-300 w-full h-px mt-6" ></div>
            <div className="mt-9 flex justify-between">
                <p>Sub total</p>
                <p> $519</p>
            </div>
            <div className="mt-4 flex justify-between font-semibold ">
                <p> Total</p>
                <p> $519</p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="mt-8 bg-gray-300 text-black px-6 py-2 rounded mb-2">Continue Shopping</button>
              </div>

        </div>
        </div>
    );
}
