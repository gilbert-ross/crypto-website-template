import React from "react";
import AboutPage from "../about/AboutPage";
import TokenomicsPage from "../tokenomics/TokenomicsPage";
import RoadmapPage from "../roadmap/RoadmapPage";
import ChartsPage from "../charts/ChartsPage";
import FAQPage from "../faq/FAQPage";
import ContactPage from "../contact/ContactPage";
import BTC_Image from "../../assets/5a521fa72f93c7a8d5137fcf.png";
import NavBarComponent from "../../components/NavBarComponent";
import FooterComponent from "../../components/FooterComponent";

function HomePage() {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div>
            <container>
                <section>
                    <button className={"button is-warning"} style={{position: "fixed", bottom: 15, right: 15, zIndex: 1}} onClick={() => scrollToTop()}>
                        Scroll to top
                    </button>
                    <NavBarComponent/>
                </section>
                <section id={"home"} className="hero is-warning py-6">
                    <div className="hero-body">
                        <div className="columns is-mobile">
                            <div className="column">
                                <p className="title">
                                    Gilbert Ross Token
                                </p>
                                <p className="subtitle">
                                    Gilbert Ross Token is an meme coin launchpad dedicated to quality
                                    meme projects built on Ethereum. Hold our tokens
                                    to be rewarded and have access to our launches.
                                </p>
                            </div>
                            <div className="column has-text-centered">
                                <img src={BTC_Image}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={"about"} className={"py-6"}>
                    <AboutPage/>
                </section>
                <section id={"tokenomics"} className={"py-6"}>
                    <TokenomicsPage/>
                </section>
                <section id={"roadmap"} className={"py-6"}>
                    <RoadmapPage/>
                </section>
                <section id={"charts"} className={"py-6"}>
                    <ChartsPage/>
                </section>
                <section id={"faq"} className={"py-6"}>
                    <FAQPage/>
                </section>
                <section id={"contact"} className={"py-6"}>
                    <ContactPage/>
                </section>
                <section>
                    <FooterComponent/>
                </section>
            </container>
        </div>
    )
}

export default HomePage;
