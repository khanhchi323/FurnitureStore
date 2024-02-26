import { Carousel } from "@material-tailwind/react";

import sale3 from "../../assets/public/banner/intro1.jpg"
import sale4 from "../../assets/public/banner/intro2.jpg"


export default function MainBanner() {
    const imagePaths = [sale3, sale4];

    return (
        <div className="flex items-center justify-center my-10">
            <Carousel
                className="rounded-xl 2xl:w-[80%] md:w-[90%] w-[80%]"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i
                                    ? "w-8 bg-white"
                                    : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
                autoplay={true}
                loop={true}
            >
                {imagePaths.map((path, index) => (
                    <img key={index} src={path} alt="" className="rounded-3xl p-2 object-cover object-center" />
                ))}
            </Carousel>
        </div>
    );
}