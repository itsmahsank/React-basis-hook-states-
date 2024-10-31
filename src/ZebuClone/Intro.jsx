import React from 'react'
import "./Zebu.css";

export const Intro = () => {
    return (
        <section id="intro">
            <div className="main-container">
                <div className="content1">
                    <div className="simg" id="mobile-img"></div>
                    <div className="simg" id="watch-img"></div>
                </div>

                <div className="main-intro">
                    <h1>Zebu - Multipurpose Landing Page HTML Template + RTL</h1>
                </div>

                <div className="btn-cont">
                    <div className="purchase-btn">
                        <p>Purchase Zebu Now</p>
                    </div>
                </div>

                <div className="content2">
                    <div className="simg" id="form-img"></div>
                    <div className="free-img-container">
                        <div className="free-img"></div>
                    </div>
                    <div className="simg" id="movie1-img"></div>
                </div>
            </div>
        </section>
    );
};
