
import React, { useState, useEffect } from "react";

export default function EditProduct({ product, onUpdateProduct }) {
    const [productName, setProductName] = useState("");
    const [checked, setChecked] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [category, setCategory] = useState("");
    const categories = [
        { id: 1, name: "Cabinet" },
        { id: 2, name: "Table" },
        { id: 3, name: "Sofa" },
        { id: 3, name: "Chair" }
    ];

    useEffect(() => {
        if (product) {
            setProductName(product.productName);
            setChecked(product.hotProduct);
            setCategory(product.category);
        }
    }, [product]);

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleImageChange = (event) => {
        setImageFile(event.target.files[0]);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    const handleUpdateProduct = () => {
        const updatedProduct = {
            ...product,
            productName: productName,
            imageURL: imageFile ? URL.createObjectURL(imageFile) : null,
            hotProduct: checked,
            category: category
        };
        onUpdateProduct(updatedProduct);
    };

    return (
        <div className="font-sans h-full w-full justify-center">
            <div className="text-center py-4 ">
                <b className="text-3xl">Edit Product</b>
            </div>
            <br />
            <div className="w-full flex justify-center">
                <div className="px-8 w-3/5 shadow pb-4">
                    <form onSubmit={handleUpdateProduct} />
                    <p className="font-bold my-1">Category Name</p>
                    <select className="border rounded-md px-2 py-1 mt-1 border-2 border-gray-500 w-full" value={category} onChange={handleCategoryChange}>
                        <option value="">Select a category</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                    <p className="font-bold my-1">Product Name</p>
                    <input type="text" className="border rounded-md px-2 py-1 mt-1 border-2 border-gray-500 w-full" value={productName} onChange={handleProductNameChange} />
                    <p className=" font-bold my-1">Descriptrion</p>
                    <textarea className="text-base  border-solid border-2 border-gray-500 w-full rounded p-1"
                        type="text"
                        id="multiline-input"
                        name="multiline-input"
                        required
                        placeholder="Nhập nội dung"
                    />
                    <p className="font-bold my-1">Product Image</p>
                    <input className=""
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <div className="flex w-full">
                        <div className="w-full">
                            <p className="font-bold my-1">Original Prices</p>
                            <input type="text" className="border rounded-md px-2 py-1 mt-1 border-2 border-gray-500 w-3/4" />
                        </div>
                        <div className="w-full">
                            <p className="font-bold my-1">Discount Prices</p>
                            <input type="text" className="border rounded-md px-2 py-1 mt-1 border-2 border-gray-500 w-3/4" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex">
                            <p className="mt-3">Hot Product</p>
                            <input className="mt-4 mx-2" type="checkbox" name="" id="" checked={checked} onChange={handleCheckboxChange} />
                        </div>
                        <div className="flex">
                            <p className="mt-3">Status</p>
                            <input className="mt-4 mx-2" type="checkbox" name="" id="" checked={checked} onChange={handleCheckboxChange} />
                        </div>
                    </div>
                    <div className="text-sm mt-2 w-full flex ">
                        <button className="w-20 text-left text-gray-800  ">Back</button>
                        <div className="w-full text-right">
                            <button className="bg-blue-400 text-white p-2 rounded" type="submit">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
