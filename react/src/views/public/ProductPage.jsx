import { useState, useEffect } from "react";
import axios from "../../services/AxiosCustom";

const url = "https://cchlb.store/furniturestore/public/api/products";


export default function CategoryBar() {
    

    const [data, setData] = useState([]);
    // const [page, setPage] = useState([]);
    const fetchAllProducts = () => {
        return axios.get(url).then((res) => setData(res));
      };
    useEffect(() => {
        const fetchData = async () => {
            try {
                //let res = await res.json()
                let res = await fetchAllProducts();
                console.log(res);
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    // const handlePageChange = (newPage) => {
    //     setPage(newPage);
    // };
    console.log(data);
    return (
        <div className="bg-white">
            <div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            New Arrivals
                        </h1>
                    </div>

                    <section
                        aria-labelledby="products-heading"
                        className="pb-24 pt-6"
                    >
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Product grid */}

                            <div className="lg:col-span-4 ">
                                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {data &&
                                        data.length > 0 &&
                                        data.map((productList, index) => (
                                            <div
                                                key={index}
                                                className="bg-white rounded-lg shadow-lg p-4"
                                            >
                                                {/* Product Image */}
                                                <div className="relative overflow-hidden mb-4">
                                                    <img
                                                        className="object-cover w-full h-40 rounded-md"
                                                        src={`https://cchlb.store/furniturestore/public//${productList.images}`}
                                                    />
                                                </div>

                                                {/* Product Details */}
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                    {productList.name}
                                                </h3>
                                                <p className="text-gray-500 text-sm mb-4">
                                                    {productList.description}
                                                </p>

                                                {/* Price and Add to Cart */}
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-900 font-bold text-lg">
                                                        ${productList.price}
                                                    </span>
                                                    <button className="bg-gray-900 text-white text-sm py-1 px-4 rounded-xl font-bold hover:bg-gray-800">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                </section>
                            </div>
                           </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
