import React from 'react'
import "./Zebu.css";

export const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="nav">
                    <h2>Zebu</h2>
                    <a href="#">Intro</a>
                    <a href="#">LTR Demos</a>
                    <a href="#">RTL Demos</a>
                    <a href="#">Features</a>
                    <a href="#">Alternate Versions</a>
                    <a href="#">Support</a>
                    <div id="nav-btn">
                        <p>Buy Now!</p>
                    </div>
                </div>
            </div>
        </>
    );
};