import { useState, useEffect } from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
//import axios from "../../services/CategoryService";
import axios from "../../services/AxiosCustom";
const url = "https://cchlb.store/furniturestore/public/api/categories";

export default function Category() {
    const [data, setData] = useState([]);
    // const [page, setPage] = useState([]);
    const fetchAllCategories = () => {
        return axios.get(url).then((res) => setData(res));
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                //let res = await res.json()
                let res = await fetchAllCategories();
                console.log(res);
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto">
            <b className=" flex justify-center font-semibold text-2xl">ALL CATEGORIES</b>

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
                                {data.map((CategoryList, index) => (
                                    <Slide index={index} key={index}>
                                        <Link
                                            to={`category/${CategoryList.id}`}
                                            className="category-slide"
                                        >
                                            {/* Your category slide content goes here */}
                                            <img
                                                src={`https://cchlb.store/furniturestore/public/${CategoryList.image}`}
                                                alt={CategoryList.name} // Assuming your category object has a "name" property
                                                className=" w-[50%] h-[100%]"
                                            />
                                            <h3 className="category-name">
                                                {CategoryList.name}
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
}
