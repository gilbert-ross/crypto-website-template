import React from "react";
import BTC_Image from "../../assets/5a521fa72f93c7a8d5137fcf.png";

function ChartsPage() {
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
                                Charts
                            </div>
                            <div className="content">
                                <div className={"block"}>
                                    <div>
                                        Total liquidity:$2,419,993.20
                                    </div>
                                    <div>
                                        Daily volume:$1,152,415.63
                                    </div>
                                    <div>
                                        Pooled GRT:195,077,570,986.06
                                    </div>
                                    <div>
                                        Total tx:1122
                                    </div>
                                    <div>
                                        Holders:13592
                                    </div>
                                    <div>
                                        Diluted Market Cap:$62,026,433.63
                                    </div>
                                </div>
                                <div className={"columns"}>
                                    <div className={"block column"}>
                                        <button className="button is-warning">Dextools</button>
                                    </div>
                                    <div className={"block column"}>
                                        <button className="button is-warning">CoinGecko</button>
                                    </div>
                                    <div className={"block column"}>
                                        <button className="button is-warning">Poocoin</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartsPage;