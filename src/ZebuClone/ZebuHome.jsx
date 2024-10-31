import React from 'react';
import "./Zebu.css";
import {NavBar } from "./NavBar.jsx";
import {Intro } from "./Intro.jsx";
import {Ltr } from "./Ltr.jsx"
import {Rtr } from "./Rtr.jsx"
import {Features } from "./Features.jsx"
import {Footer } from "./Footer.jsx"

export const ZebuHome =()=>{
    return(
        <>
        <NavBar/>
        <Intro/>
        <Ltr/>
        <Rtr/>
        <Features/>
        <Footer/>
        </>
    )
}

