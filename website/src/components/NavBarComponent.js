import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

function NavBarComponent() {
    return (
        <section>
            <nav className="navbar is-fixed-top is-black" role="navigation" aria-label="main navigation">
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/#home" className="navbar-item">
                            Gilbert Ross Token
                        </Link>
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
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-warning">
                                    <strong>Buy on Uniswap</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default NavBarComponent;