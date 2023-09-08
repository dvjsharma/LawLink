import React from "react";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/hero";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banners/Home";


const Home=()=>{
    return (
        <>
            <Navbar/>
            <Banner/>
            <Hero/>
            <Footer/>
        </>
    );
};
export default Home;