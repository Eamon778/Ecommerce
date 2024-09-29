import React, {useState} from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import NewArrivals from "./Component/NewArrivals";

function Home(){
    return (
        <>
            <Navbar />
            <Hero />
            <NewArrivals />
        </>
    )
}

export default Home;