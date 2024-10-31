import React from 'react';
import "./Zebu.css";


export const Footer = () => {
    return (
        <footer>
            <div className="f-container">
                <div className="fbox">
                    <div className="f-heading">
                        <h2>Purchase the Zebu Template now <br /> & make everything easier!</h2>
                    </div>

                    <div className="f-cont-btn">
                        <div className="f-btn">
                            <p>Purchase Zebu Now</p>
                        </div>
                    </div>

                    <div className="f-main-logo">
                        <div className="f-logo-cont">
                            <div className="flogo"></div>
                        </div>
                    </div>

                    <div className="f-statement">
                        <a href="https://hibootstrap.com/">Crafted by HiBootstrap.com</a>
                    </div>

                    <div className="buy-btn-container">
                        <div className="buy-btn">
                            <p>Buy Now</p>
                        </div>
                    </div>

                    <div className="buy-btn-container">
                        <button id="my-btn">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
