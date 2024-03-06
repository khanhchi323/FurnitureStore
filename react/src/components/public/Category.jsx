import React, { useState, useEffect } from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { fetchAllCategory } from "../../services/CategoryService";

const CategorySlider = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getCategoryService();
    }, []);

    const getCategoryService = async () => {
        try {
            let res = await fetchAllCategory();
            if (res && res.data) {
                setData(res.data);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
    console.log(data);


    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                <CarouselProvider
                    naturalSlideWidth={100}
                    isIntrinsicHeight={true}
                    totalSlides={7}
                    visibleSlides={4}
                    step={2}
                    infinite={true}
                >
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack
                            role="button"
                            aria-label="slide backward"
                            className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                            id="prev"
                        >
                            <svg
                                width={8}
                                height={14}
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 1L1 7L7 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </ButtonBack>
                        <div>
                            <Slider>
                                {data.map((ProductCategoryList, index) => (
                                    <Slide index={index} key={index}>
                                        <Link
                                            to={`../../components/public/Category.jsx/${ProductCategoryList.product_category_id}`}
                                            className="category-slide"
                                        >
                                            {/* Your category slide content goes here */}
                                            <img
                                                src={`../../../src/assets/public/CateProduct/${ProductCategoryList.image}`}
                                                alt={
                                                    ProductCategoryList.product_category_name
                                                } // Assuming your category object has a "name" property
                                                className="category-image"
                                            />
                                            <h3 className="category-name">
                                                {
                                                    ProductCategoryList.product_category_name
                                                }
                                            </h3>
                                        </Link>
                                    </Slide>
                                ))}
                            </Slider>
                        </div>
                        <ButtonNext
                            role="button"
                            aria-label="slide forward"
                            className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                            id="next"
                        >
                            <svg
                                width={8}
                                height={14}
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L7 7L1 13"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
};

export default CategorySlider;
