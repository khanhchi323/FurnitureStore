import React from "react";
import Img1 from "../../assets/public/imgbg/img1.jpg";

export default function AboutUs() {
    return (
        <div className="flex justify-between m-10 md:flex-row ">
            <div className="px-10" data-jarallax-element="50">
                <img src={Img1} alt="Image" className="img-fluid rounded" />
            </div>
            <div className="col-md-6 order-md-1" data-jarallax-element="-50">
                <div className="row">
                    <div className="col-12">
                        <div className="text-left pb-6">
                            <b className="text-[#21325E] text-4xl">About Us</b>
                        </div>
                    </div>
                    <div className=" ">
                        <p className="pr-10 ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eveniet incidunt magnam corrupti, odit eos
                            harum quaerat nostrum voluptatibus aspernatur
                            eligendi accusantium cum, impedit blanditiis
                            voluptate commodi doloribus, nemo dignissimos
                            recusandae.
                        </p>
                    </div>

                    <div className=" flex justify-between">
                        <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
                            <div className="pr-20">
                                <div className="unit-4-icon mr-4 mb-3">
                                    <span className="text-primary icon-phonelink"></span>
                                </div>
                                <div>
                                    <b className="text-[#21325E]">
                                        Web &amp; Mobile Specialties
                                    </b>
                                    <p className="pt-5">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perferendis quis
                                        consect.
                                    </p>
                                    <p className="mb-0 pt-5">
                                        <a className="text-[#21325E]" href="#">
                                            Learn More
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
                            <div className="pr-10">
                                <div className="unit-4-icon mr-4 mb-3">
                                    <span className="text-primary icon-extension"></span>
                                </div>
                                <div>
                                    <b className="text-[#21325E]">
                                        Intuitive Thinkers
                                    </b>
                                    <p className="pt-5">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perferendis quis.
                                    </p>
                                    <p className="mb-0 pt-5">
                                        <a className="text-[#21325E]" href="#">
                                            Learn More
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
