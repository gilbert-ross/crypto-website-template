import React, { useState } from "react";
import {Collapse} from 'react-collapse';

function FAQPage() {

    const [q1, setQ1] = useState(false);
    const [q2, setQ2] = useState(false);
    const [q3, setQ3] = useState(false);
    const [q4, setQ4] = useState(false);
    const [q5, setQ5] = useState(false);
    const [q6, setQ6] = useState(false);

    return (
        <div className={"container m-5"}>
            <div className="card">
                <div className="card-content">
                    <div className={"title"}>
                        Frequently Asked Questions
                    </div>
                    <div className={"subtitle"}>
                        All you need to know about the Gilbert Ross Token
                    </div>
                    <div className="content columns">
                        <div className={"column"}>
                            <div className={"block"}>
                                <button className={"button is-warning"}onClick={() => setQ1(!q1)}>
                                    How did the Gilbert Toss Token come into existence?
                                </button>
                                <Collapse isOpened={q1}>
                                    <div>On August 1st, 2021, Gilbert Ross decided to create this token.</div>
                                </Collapse>
                            </div>
                            <div className={"block"}>
                                <button className={"button is-warning"}onClick={() => setQ2(!q2)}>
                                    How did the Gilbert Toss Token come into existence?
                                </button>
                                <Collapse isOpened={q2}>
                                    <div>On August 1st, 2021, Gilbert Ross decided to create this token.</div>
                                </Collapse>
                            </div>
                            <div className={"block"}>
                                <button className={"button is-warning"}onClick={() => setQ3(!q3)}>
                                    How did the Gilbert Toss Token come into existence?
                                </button>
                                <Collapse isOpened={q3}>
                                    <div>On August 1st, 2021, Gilbert Ross decided to create this token.</div>
                                </Collapse>
                            </div>
                        </div>
                        <div className={"column"}>
                            <div className={"block"}>
                                <button className={"button is-warning"}onClick={() => setQ4(!q4)}>
                                    How can I buy GRT?
                                </button>
                                <Collapse isOpened={q4}>
                                    <div>The Gilbert Ross Token is an ERC-20 Token. It can be bought on Uniswap DEX. Please set slippage to 12-15%</div>
                                </Collapse>
                            </div>
                            <div className={"block"}>
                                <button className={"button is-warning"}onClick={() => setQ5(!q5)}>
                                    How can I buy GRT?
                                </button>
                                <Collapse isOpened={q5}>
                                    <div>The Gilbert Ross Token is an ERC-20 Token. It can be bought on Uniswap DEX. Please set slippage to 12-15%</div>
                                </Collapse>
                            </div>
                            <div className={"block"}>
                                <button className={"button is-warning"}onClick={() => setQ6(!q6)}>
                                    How can I buy GRT?
                                </button>
                                <Collapse isOpened={q6}>
                                    <div>The Gilbert Ross Token is an ERC-20 Token. It can be bought on Uniswap DEX. Please set slippage to 12-15%</div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQPage;