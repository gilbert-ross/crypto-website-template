import React from "react";
import BTC_Image from "../../assets/5a521fa72f93c7a8d5137fcf.png";

function AboutPage() {
    return (
        <div className={"container m-5"}>
            <div className="card">
                <div className="card-content">
                    <div className={"columns"}>
                        <div className="column has-text-centered">
                            <img src={BTC_Image}/>
                        </div>
                        <div className={"column"}>
                            <div className={"title"}>
                                What is the Gilbert Ross Token?
                            </div>
                            <div className="content">
                                <div className={"block"}>
                                    Starlink is a project with the ability to utilize the power of the blockchain and decentralization in order to infinitely expand upon and honor the true vision of a new financial paradigm.
                                </div>
                                <div className={"block"}>
                                    Human interaction and socialization has become overwhelmingly virtual; most people have moved their social and business relationships to their phone or laptop. It is now, during a global pandemic that has driven us online more so than ever. These new habits have already become permanent behavioral and cultural shifts, irrevocably changing what we consider normal and acceptable.
                                </div>
                                <div className={"block"}>
                                    In this way the social responsibility that exists to provide tools and resources in the virtual space is essential to create a fun and adaptive environment for individuals to thrive and monetize. This stands at the core of our ethos at Starlink.
                                </div>
                                <div className={"block"}>
                                    <button className="button is-warning">Read Whitepaper</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;