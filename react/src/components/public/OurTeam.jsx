import React from "react";
import Person2 from "../../assets/public/imgbg/person2.jpg";
import Person3 from "../../assets/public/imgbg/person3.jpg";
import Person4 from "../../assets/public/imgbg/person4.jpg";

export default function OurTeam() {
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
                                src={Person4}
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
                        data-aos-delay="200">
                        <div className="person text-center bg-white p-4">
                            <img
                                src={Person3}
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
                        data-aos-delay="200">
                        <div className="person text-center bg-white p-4">
                            <img
                                src={Person4}
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
