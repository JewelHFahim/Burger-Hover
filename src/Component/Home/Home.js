import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Home.css";
import img1 from "../Assete/YUM.png";
import img2 from "../Assete/BURGER.png";
import Burger from '../Burger/Burger';

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <Burger />
            <img src={img1} className="img-yum" alt="" />
            <img src={img2} className="img-burger" alt="" />
        </div>
    );
};

export default Home;