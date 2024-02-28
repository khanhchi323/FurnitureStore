import React from "react";
import { Link } from "react-router-dom";
import HH from "../../assets/public/imgbg/HH.png";
import KC from "../../assets/public/imgbg/KC.jpg";
import ML from "../../assets/public/imgbg/ML.png";
import NC from "../../assets/public/imgbg/NC.png";
import DB from "../../assets/public/imgbg/DB.png";

export default function OurTeam() {
    const TeamList = () => {
        const teams = [
            {name: 'Phan Hà', position: ' development', image:'../../assets/public/imgbg/HH.png', description: ''},
            {name: 'Khánh Chi', position:  'development', image:'../../assets/public/imgbg/KC.jpg'},
            {name: 'Mạnh Lưu', position: ' development', image:'../../assets/public/imgbg/ML.png'},
            {name: 'Nguyên Chương', position: 'development', image:'../../assets/public/imgbg/NC.png'},
            {name: 'Dương Băng', position: 'development', image:'../../assets/public/imgbg/DB.png'},

        ];
    }
    return (
        <div className=" " id="team-section">
            <div className="m-14">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center">
                        <b className="text-[#21325E] text-2xl">Our Team</b>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <div className="" data-aos="fade" data-aos-delay="100">
                        <div className="person text-center bg-white p-4">
                            <img
                                src={HH}
                                alt="Image"
                                className="img-fluid rounded-circle mb-3 w-80"
                            />
                            <h3>John Rooster</h3>
                            <p className="position text-muted">
                                Co-Founder, President
                            </p>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nisi at consequatur unde
                                molestiae quidem provident voluptatum deleniti
                                quo iste error eos est praesentium distinctio
                                cupiditate tempore suscipit inventore deserunt
                                tenetur.
                            </p>
                            
                        </div>
                    </div>

                    
                    <div
                        className="col-md-6 col-lg-4 mb-5 mb-lg-0"
                        data-aos="fade"
                        data-aos-delay="200"
                    >
                        <div className="person text-center bg-white p-4">
                            <img
                                src={KC}
                                alt="Image"
                                className="img-fluid rounded-circle mb-3"
                            />
                            <h3>Tom Sharp</h3>
                            <p className="position text-muted">
                                Co-Founder, COO
                            </p>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nisi at consequatur unde
                                molestiae quidem provident voluptatum deleniti
                                quo iste error eos est praesentium distinctio
                                cupiditate tempore suscipit inventore deserunt
                                tenetur.
                            </p>
                            <ul className="ul-social-circle">
                                <li>
                                    <Link>
                                        <span className="icon-facebook"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="icon-twitter"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="icon-linkedin"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="icon-instagram"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-4 mb-5 mb-lg-0"
                        data-aos="fade"
                        data-aos-delay="200"
                    >
                        <div className="person text-center bg-white p-4">
                            <img
                                src={ML}
                                alt="Image"
                                className="img-fluid rounded-circle mb-3"
                            />
                            <h3>Tom Sharp</h3>
                            <p className="position text-muted">
                                Co-Founder, COO
                            </p>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nisi at consequatur unde
                                molestiae quidem provident voluptatum deleniti
                                quo iste error eos est praesentium distinctio
                                cupiditate tempore suscipit inventore deserunt
                                tenetur.
                            </p>
                            <ul className="ul-social-circle">
                                <li>
                                    <Link>
                                        <span className="icon-facebook"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="icon-twitter"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="icon-linkedin"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="icon-instagram"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-4 mb-5 mb-lg-0"
                        data-aos="fade"
                        data-aos-delay="200"
                    >
                        <div className="person text-center bg-white p-4">
                            <img
                                src={NC}
                                alt="Image"
                                className="img-fluid rounded-circle mb-3"
                            />
                            <h3>Tom Sharp</h3>
                            <p className="position text-muted">
                                Co-Founder, COO
                            </p>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nisi at consequatur unde
                                molestiae quidem provident voluptatum deleniti
                                quo iste error eos est praesentium distinctio
                                cupiditate tempore suscipit inventore deserunt
                                tenetur.
                            </p>
                            <ul className="ul-social-circle">
                                <li>
                                    <Link>
                                        <span className="icon-facebook"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="icon-twitter"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="icon-linkedin"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="icon-instagram"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-4 mb-5 mb-lg-0"
                        data-aos="fade"
                        data-aos-delay="200"
                    >
                        <div className="person text-center bg-white p-4">
                            <img
                                src={DB}
                                alt="Image"
                                className="img-fluid rounded-circle mb-3"
                            />
                            <h3>Tom Sharp</h3>
                            <p className="position text-muted">
                                Co-Founder, COO
                            </p>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nisi at consequatur unde
                                molestiae quidem provident voluptatum deleniti
                                quo iste error eos est praesentium distinctio
                                cupiditate tempore suscipit inventore deserunt
                                tenetur.
                            </p>
                            <ul className="ul-social-circle">
                                <li>
                                    <Link>
                                        <span className="icon-facebook"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="icon-twitter"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="icon-linkedin"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="icon-instagram"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
