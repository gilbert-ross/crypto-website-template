import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

function FooterComponent() {
    return (
        <div>
            <footer className="footer">
                <div className="content">
                    <div className="columns is-mobile">
                        <div className="column">
                            <div className={"subtitle"}>
                                Navigation
                            </div>
                            <Link to="/#about" className="navbar-item">
                                About Us
                            </Link>
                            <Link to="/#tokenomics" className="navbar-item">
                                Tokenomics
                            </Link>
                            <Link to="/#roadmap" className="navbar-item">
                                Roadmap
                            </Link>
                            <Link to="/#charts" className="navbar-item">
                                Charts
                            </Link>
                            <Link to="/#faq" className="navbar-item">
                                FAQ
                            </Link>
                            <Link to="/#contact" className="navbar-item">
                                Contact Us
                            </Link>
                        </div>
                        <div className="column">
                            <div className={"subtitle"}>
                                Social
                            </div>
                            <Link to="/#about" className="navbar-item">
                                Telegram
                            </Link>
                            <Link to="/#about" className="navbar-item">
                                Twitter
                            </Link>
                            <Link to="/#about" className="navbar-item">
                                Facebook
                            </Link>
                            <Link to="/#about" className="navbar-item">
                                Instagram
                            </Link>
                            <Link to="/#about" className="navbar-item">
                                Github
                            </Link>
                        </div>
                        <div className="column">
                            <div className={"subtitle"}>
                                Gilbert Ross Token
                            </div>
                            <div>
                                © 2021 Gilbert Ross Token, LLC. All rights reserved. | Web Designed by
                                @gilbert-ross
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterComponent;