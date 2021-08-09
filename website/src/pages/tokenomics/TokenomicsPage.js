import React from "react";
import BTC_Image from "../../assets/5a521fa72f93c7a8d5137fcf.png";

function TokenomicsPage() {
    return (
        <div className={"container m-5"}>
            <div className="card">
                <div className="card-content">
                    <div className={"columns"}>
                        <div className={"column"}>
                            <div className={"title"}>
                                Fair Tokenomics
                            </div>
                            <div className="content">
                                <div className={"block"}>
                                    To build our vehicle for a democracy beyond Earth, we based Starlink on fair tokenomics and launch, with no presale, no dev tokens, and no dev tax.                                </div>
                                <div className={"block columns"}>
                                    <div className={"column"}>
                                        <div>
                                            NO
                                        </div>
                                        <div>
                                            Dev Tax
                                        </div>
                                    </div>
                                    <div className={"column"}>
                                        <div>
                                            NO
                                        </div>
                                        <div>
                                            Pre-Sale
                                        </div>
                                    </div>
                                    <div className={"column"}>
                                        <div>
                                            NO
                                        </div>
                                        <div>
                                            Developer Tokens
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column has-text-centered">
                            <img src={BTC_Image}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenomicsPage;