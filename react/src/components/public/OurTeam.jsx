import React from "react";
import { Link } from "react-router-dom";
import HH from "../../assets/public/imgbg/HH.png";
import KC from "../../assets/public/imgbg/KC.jpg";
import ML from "../../assets/public/imgbg/ML.png";
import NC from "../../assets/public/imgbg/NC.png";
import DB from "../../assets/public/imgbg/DB.png";

export default function OurTeam() {
    const Teams = [
        {
            name: "Phan Hà",
            position: " development",
            image: HH,
            introduction: "Hello",
        },
        {
            name: "Khánh Chi",
            position: "development",
            image: KC,
            introduction: "Hello",
        },
        {
            name: "Mạnh Lưu",
            position: " development",
            image: ML,
            introduction: "Hello",
        },
        {
            name: "Nguyên Chương",
            position: "development",
            image: NC,
            introduction: "Hello",
        },
        {
            name: "Dương Băng",
            position: "development",
            image: DB,
            introduction: "Hello",
        },
    ];
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
                            {Teams.map((team, index) => (
                                <section
                                    key={index}
                                    className="bg-${team.name}-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer"
                                >
                                    <img className=" w-32 h-32 object-cover" src={team.image} alt="" />
                                    <h2>{team.name}</h2>
                                    <p>{team.position}</p>
                                    <i>{team.introduction}</i>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
