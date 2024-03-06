import React, { useState } from "react";
import Cabinet from "../../assets/public/CateProduct/cabinet.svg";
import Chair from "../../assets/public/CateProduct/chair.png";
import Sofa from "../../assets/public/CateProduct/sofa.svg";
import Table from "../../assets/public/CateProduct/table.svg";

export default function CartPage() {
    const [products, setProducts] = useState([
        { id: 1, name: "Cabinet", image: Cabinet, price: 1599000, quantity: 1 },
        { id: 2, name: "Chair", image: Chair, price: 1999000, quantity: 1 },
        { id: 3, name: "Sofa", image: Sofa, price: 1299000, quantity: 1 },
        { id: 4, name: "Table", image: Table, price: 999000, quantity: 1 },
    ]);

    const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity === 0) {
            const confirmDelete = window.confirm("Bae không muốn mua em nữa hả :(((");
            if (confirmDelete) {
                const updatedProducts = products.filter(product => product.id !== productId);
                setProducts(updatedProducts);
            }
        } else {
            const updatedProducts = products.map(product =>
                product.id === productId ? { ...product, quantity: newQuantity } : product
            );
            setProducts(updatedProducts);
        }
    };

    return (
        <div className=" bg-gray-100 pt-6 h-full">
            <h1 className="mb-4 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto justify-center px-6  xl:px-0m flex flex-col lg:flex lg:flex-row ">
                <div className="h-full lg:w-2/3">
                    {products.map((product) => (
                        <div key={product.id} className="rounded-lg bg-white shadow-md flex lg:w-full h-1/3 lg:mb-6 mb-2">
                            <div className="justify-between rounded-lg p-5 flex lg:">
                                <img src={product.image} alt="product-image" className="rounded-lg w-52 lg:h-52" />
                            </div>
                            <div className="text-right w-full pr-4 self-center lg:text-left">
                                <div className="content max-w-xs overflow-hidden mb-6">
                                    <p className="truncate text-sm md:text-lg self-center font-bold text-gray-900">{product.name}</p>
                                </div>
                                <span
                                    className="cursor-pointer rounded-l bg-gray-400 py-1.5 pb-2 px-2.5 duration-100 hover:bg-red-500 hover:text-blue-50"
                                    onClick={() => handleQuantityChange(product.id, product.quantity - 1)}> - </span>
                                <span className="m-3">{product.quantity}</span>
                                <span
                                    className="cursor-pointer rounded-r bg-gray-400 py-1.5 pb-2 px-2 duration-100 hover:bg-red-500 hover:text-blue-50"
                                    onClick={() => handleQuantityChange(product.id, product.quantity + 1)}> +</span>
                                <p className="text-base mt-6">{(product.price * product.quantity).toLocaleString()}đ</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Sub total */}
                <div className=" mt-0 h-full lg:pb-7 rounded-lg border bg-white p-4 shadow-md lg:w-1/3 lg:ml-8 ">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">{total.toLocaleString()}đ</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-base text-gray-700">Shipping</p>
                        <p className="text-base text-gray-700">450.000đ</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-base font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg text-right font-bold">{(total + 450000 + (total * 0.1)).toLocaleString()}đ</p>
                            <p className="text-sm text-gray-700">including VAT(10%)</p>
                        </div>
                    </div>
                    <button className="mt-6 w-full rounded-md bg-red-400 py-1.5 font-medium text-red-50 hover:bg-red-600">Check out</button>
                </div>
            </div>
        </div>
    );
}
