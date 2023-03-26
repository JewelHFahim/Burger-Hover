import React from "react";
import "./Test.css";
import img1 from "../Assete/1.png";
import img2 from "../Assete/2.png";
import img3 from "../Assete/3.png";
import img4 from "../Assete/4.png";
import img5 from "../Assete/5.png";
import img6 from "../Assete/6.png";

const Test = () => {


  return (
    <div className="border relative">
      <img src={img6} className="layer w-[300px] border border-red-600 one" alt="" />
      <img src={img5} className="layer w-[300px] border border-red-600 mt-[-250px] one" alt="" />
      <img src={img4} className="layer w-[300px] border border-red-600 mt-[-250px] one" alt="" />
      <img src={img3} className="layer w-[300px] border border-red-600 mt-[-250px] one" alt="" />
      <img src={img2} className="layer w-[300px] border border-red-600 mt-[-250px] one" alt="" />
      <img src={img1} className="layer w-[300px] border border-red-600 mt-[-250px] one" alt="" />
    </div>

  );
};

export default Test;
