import React, { useState, useEffect } from "react";

export default function ProductPage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <div className="container mx-auto p-4 text-right">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="mb-4 p-2 border rounded w-1/3 "
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(12)].map((_, index) => (
                        (windowWidth > 840 || index < 8) && (
                            <div key={index} className="border p-2">
                                <img src="src/assets/public/decor1.jpeg" alt="#" className="w-full h-64 object-cover mb-2"/>
                                <h3 className="text-lg text-center font-semibold">Modern sofa</h3>
                                <p className="text-center m-3 ">$73.00</p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}
