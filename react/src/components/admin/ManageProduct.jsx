import React from "react";
import { Link } from "react-router-dom";

export default function ManageProduct() {
    // Danh sách sản phẩm
    const products = [
        { id: 1, categoryName: "Cabinet", productName: "Cabinet Grey", description: " Text Text Text Text Text", image: "cabinet.jpg", originalPrice: "1.499.000đ", creationDate: "2024-03-01", modifyDate: "2024-03-01", status: "Active", hotProduct: "Yes" },
        { id: 2, categoryName: "Chair", productName: "Couch", description: " Text Text Text Text Text", image: "chair.jpg", originalPrice: "1.490.000", creationDate: "2024-03-02", modifyDate: "2024-03-02", status: "Active", hotProduct: "No" },
        { id: 3, categoryName: "Table", productName: "Cloth table", description: " Text Text Text Text Text", image: "table.jpg", originalPrice: "999.000đ", creationDate: "2024-03-02", modifyDate: "2024-03-02", status: "Active", hotProduct: "No" },
        { id: 4, categoryName: "Sofa", productName: "Sofa Small", description: " Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text", image: "sofa.jpg", originalPrice: "1.590.000đ", creationDate: "2024-03-02", modifyDate: "2024-03-02", status: "Active", hotProduct: "No" },
        { id: 5, categoryName: "Chair", productName: "Armchair", description: " Text Text Text Text Text", image: "armchair.jpg", originalPrice: "2.900.000đ", creationDate: "2024-03-02", modifyDate: "2024-03-02", status: "Active", hotProduct: "No" },
    ];
    
    const handleEditProduct = (productId) => {
        console.log("Editing product with ID:", productId);
    };

    const handleDeleteProduct = (productId) => {
        console.log("Deleting product with ID:", productId);
    };
    return (
        <div className="font-sans h-full w-full">
            <div className="text-center py-4">
                <b className="text-3xl">Manage Products</b>
                <div className="text-left ml-4 mt-6">
                    <Link to="/admin/createproduct">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">Tạo mới</button>
                    </Link><br />
                    <input className="mt-2 h-8 placeholder-gray-500 " type="text" name="find" id="find" placeholder="Tìm kiếm theo tên" />
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded ml-2">Tìm kiếm</button>
                </div>
                <table className="w-full mt-4">
                    <thead>
                        <tr>
                            <th className="border px-2 py-2">Category Name</th>
                            <th className="border px-2 py-2">Product Name</th>
                            <th className="border px-2 py-2">Description</th>
                            <th className="border px-2 py-2">Image</th>
                            <th className="border px-2 py-2">Original Prices</th>
                            <th className="border px-2 py-2">Creation Date</th>
                            <th className="border px-2 py-2">Modify Date</th>
                            <th className="border px-2 py-2">Status</th>
                            <th className="border px-2 py-2">Hot Product</th>
                            <th className="border px-2 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td className="border px-1 py-2 w-24">{product.categoryName}</td>
                                <td className="border px-1 py-2 w-20">{product.productName}</td>
                                <td className="border px-1 py-2" style={{ maxWidth: "200px", wordWrap: "break-word" }}>{product.description}</td>
                                <td className="border px-1 py-2 w-40 h-40">
                                    <img src={product.image} alt={product.productName} className="h-40 w-40" />
                                </td>
                                <td className=" border px-2 py-2 w-28">{product.originalPrice}</td>
                                <td className=" border px-2 py-2 w-28">{product.creationDate}</td>
                                <td className=" border px-2 py-2 w-28">{product.modifyDate}</td>
                                <td className=" border px-2 py-2 w-16">{product.status}</td>
                                <td className=" border px-2 py-2 w-2">{product.hotProduct}</td>
                                <td className=" border px-2 py-2 flex flex-col items-center ">
                                    <Link to="/admin/editproduct">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded w-16 mb-1" onClick={() => handleEditProduct(product.id)}>Edit</button>
                                    </Link>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded w-16" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
