import React from 'react';
import Chair from "../../assets/public/CateProduct/Chair.png"

export default function SuggestionProduct() {

    const products = [
        {
            name: 'Soft Plushy Cushion Chair',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!',
            price: '29.99',
            color: 'purple',
            image: Chair,
        },
        {
            name: 'Comfortable Wooden Chair',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!',
            price: '39.99',
            color: 'pink',
            image: Chair,
        },
        {
            name: 'Multipurpose Wooden Trolly',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!',
            price: '19.99',
            color: 'green',
            image: Chair,
        },
        {
            name: 'Multipurpose Wooden Tool',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!',
            price: '34.99',
            color: 'blue',
            image: 'https://www.dropbox.com/s/1fav310i2eqkdz8/tool2.png?dl=1',
        },
    ];

    return (
        <div className=''>
            <section className="container mx-auto px-0 md:p-8 md:px-0">
                <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
                    {products.map((product, index) => (
                        <section
                            key={index}
                            className={`p-5 py-10 bg-${product.color}-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer`}
                        >
                            <img src={product.image} alt="" />
                            <div className="space-x-1 flex justify-center mt-10">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 mx-px fill-current text-orange-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 14"
                                    >
                                        <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                                    </svg>
                                ))}
                            </div>
                            <h1 className="text-3xl my-5">{product.name}</h1>
                            <p className="mb-5">{product.description}</p>
                            <h2 className="font-semibold mb-5">${product.price}</h2>
                            <button className={`p-2 px-6 bg-black text-white rounded-md hover:bg-black-200`}>
                                Add To Cart
                            </button>
                        </section>
                    ))}
                </section>
            </section>
        </div>
    );
}


