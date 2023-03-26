import React from "react";
import "./Burger.css";
import img1 from "../Assete/1.png";
import img2 from "../Assete/2.png";
import img3 from "../Assete/3.png";
import img4 from "../Assete/4.png";
import img5 from "../Assete/5.png";
import img6 from "../Assete/6.png";
import img7 from "../Assete/7.png";
import img8 from "../Assete/8.png";
import img9 from "../Assete/9.png";
import img10 from "../Assete/10.png";
import img11 from "../Assete/11.png";
import img12 from "../Assete/12.png";
import img13 from "../Assete/13.png";
import img14 from "../Assete/14.png";
import img15 from "../Assete/15.png";
import img16 from "../Assete/16.png";
import img17 from "../Assete/17.png";
import img18 from "../Assete/18.png";
import img19 from "../Assete/19.png";
import img20 from "../Assete/20.png";
import img21 from "../Assete/21.png";
import img22 from "../Assete/22.png";
import img23 from "../Assete/23.png";

const Burger = () => {
  return (
    <div className="burger-container">
      <h1>Flavors of joy</h1>

      <div className="burger w-[488px] h-[488px] border ">
        <img className="z-[22] common  twenty-three" src={img23} alt="" />
        <img className="z-[21] common twenty-two" src={img22} alt="" />
        <img className="z-[20] common twenty-one" src={img21} alt="" />
        <img className="z-[19] common twenty" src={img20} alt="" />
        <img className="z-[18] common nineteen" src={img19} alt="" />
        <img className="z-[17] common eighteen" src={img18} alt="" />
        <img className="z-[16] common seventeen" src={img17} alt="" />
        <img className="z-[15] common sixteen" src={img16} alt="" />
        <img className="z-[14] common fifteen" src={img15} alt="" />
        <img className="z-[13] common fourteen" src={img14} alt="" />
        <img className="z-[12] common thirteen" src={img13} alt="" />
        <img className="z-[11] common twelve" src={img12} alt="" />
        <img className="z-[10] common eleven" src={img11} alt="" />
        <img className="z-[9] common ten" src={img10} alt="" />
        <img className="z-[8] common nine" src={img9} alt="" />
        <img className="z-[7] common eight" src={img8} alt="" />
        {/*         <img className='z-[6] common seven' src={img7} alt="" />
                <img className='z-[5] common six' src={img6} alt="" />
                <img className='z-[4] common five' src={img5} alt="" />
                <img className='z-[3] common four' src={img4} alt="" />
                <img className=' z-[2] common three' src={img3} alt="" /> 
                <img className=' z-[1] common two' src={img2} alt="" />
                <img className=' common one' src={img1} alt="" /> */}
      </div>
    </div>
  );
};

export default Burger;
