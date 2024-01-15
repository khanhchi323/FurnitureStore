import React from "react";
import {Link} from "react-router-dom"
import Intro1 from "/src/assets/public/noithat-intro1.jpg";
import Intro5 from "/src/assets/public/noithat-intro5.jpeg";
import Intro6 from "/src/assets/public/noithat-intro6.jpeg";
import Intro7 from "/src/assets/public/noithat-intro7.jpeg";
import Intro8 from "/src/assets/public/noithat-intro8.jpg";
import Chair from "../../assets/product/chair/chair.svg";
import Cabinet from "../../assets/product/cabinet/cabinet.svg";
import Lamp from "../../assets/product/lamp/lamp.svg";
import Table from "../../assets/product/table/table.svg";
import Sofa from "../../assets/product/chair/sofa.svg";
import Tick from "../../assets/public/icon/tick.svg";

export default function Container() {
    return (
        <div style={{}} className=" m-4 mt-6 font-roboto">
            <div className="m-12">
              <p className="font-bold text-xl">Popular Categories</p>
              <div className="flex justify-between items-center">
                <Link 
                    className="flex justify-center items-center align-center flex-col bg-[#EEEDEA] rounded-lg"
                    style={{ border: "solid 2px #EEEDEA" }}>
                  <img 
                        className=" align-top"  
                         src={Chair}/>
                    <p className="">Chair</p>
                </Link>

                <Link 
                    className="flex justify-center items-center align-center flex-col bg-[#EEEDEA] rounded-lg"
                    style={{ border: "solid 2px #EEEDEA" }}>
                  <img 
                        className=" align-top"  
                         src={Cabinet}/>
                    <p className="">Cabinet</p>
                </Link>

                <Link 
                    className="flex justify-center items-center align-center flex-col bg-[#EEEDEA] rounded-lg"
                    style={{ border: "solid 2px #EEEDEA" }}>
                  <img 
                        className=" "  
                         src={Lamp}/>
                    <p className="">Lamp</p>
                </Link>

                <Link 
                    className="flex justify-center items-center align-center flex-col bg-[#EEEDEA] rounded-lg"
                    style={{ border: "solid 2px #EEEDEA" }}>
                  <img 
                        className=" align-top"  
                         src={Table}/>
                    <p className="">Table</p>
                </Link>
                
              </div>
            </div>

            <div className="flex justify-between items-center ml-12 mr-12 ">
                <div>
                    <b>A Modern Home Starts with Truebuy.</b>
                    <p>You'll find the perfect home furnishings without breaking your budget.</p>
                    <img 
                        className=""  
                         src={Sofa}/>
                </div>

                <div className="bg-[#EEEDEA]">
                    <div className=" flex  justify-between">
                        <img src={Tick}/>
                        <div>
                            <b>A Customized Experience for Every Style</b>
                            <p>
                            Our customizing tool allows you to filter by size, color, type of furniture and more!
                            </p>
                        </div>
                    </div>

                    <div className=" flex  justify-between">
                        <img src={Tick}/>
                        <div>
                            <b>Competitive Prices</b>
                            <p>
                            The majority of our products are priced at under $1000 - some as low as $89!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
