import "./Zebu.css";
import React from 'react'
export const Features = () => {
    return (
        <section id="Features">
            <div className="feature-mian-conntent">
                <div className="feature-heading">
                    <h2>Awesome Features</h2>
                </div>

                <ul id="feature-list">
                    <li>Built with Sass</li>
                    <li>Friendly Support</li>
                    <li>Powerful Design</li>
                </ul>

                <div className="feature-conetent">
                    {/* Feature container 1 */}
                    <div className="fconatiner1">
                        <div className="boxy boxy1">
                            <div className="logo-box">
                                <div className="logo1"></div>
                            </div>
                            <p>Built with Sass</p>
                        </div>

                        <div className="boxy boxy2">
                            <div className="logo-box">
                                <div className="logo2"></div>
                            </div>
                            <p>Built on Bootstrap (v5.x)</p>
                        </div>

                        <div className="boxy boxy3">
                            <div className="logo-box">
                                <div className="logo3"></div>
                            </div>
                            <p>AJAX Contact Form</p>
                        </div>

                        <div className="boxy boxy4">
                            <div className="logo-box">
                                <div className="logo4"></div>
                            </div>
                            <p>MailChimp Subscriptions</p>
                        </div>
                    </div>

                    {/* Feature container 2 */}
                    <div className="fconatiner2">
                        <div className="boxy boxy1">
                            <div className="logo-box">
                                <div className="logo5"></div>
                            </div>
                            <p>RTL Support</p>
                        </div>

                        <div className="boxy boxy2">
                            <div className="logo-box">
                                <div className="logo6"></div>
                            </div>
                            <p>Speed Performance</p>
                        </div>

                        <div className="boxy boxy3">
                            <div className="logo-box">
                                <div className="logo7"></div>
                            </div>
                            <p>Light/Dark Mode</p>
                        </div>

                        <div className="boxy boxy4">
                            <div className="logo-box">
                                <div className="logo8"></div>
                            </div>
                            <p>Owl Carousel</p>
                        </div>
                    </div>

                    {/* Add more feature containers here */}
                </div>
            </div>
        </section>
    );
};