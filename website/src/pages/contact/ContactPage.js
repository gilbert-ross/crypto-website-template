import React from "react";
import BTC_Image from "../../assets/5a521fa72f93c7a8d5137fcf.png";

function ContactPage() {
    return (
        <div className={"container m-5"}>
            <div className="card">
                <div className="card-content">
                    <div className={"columns"}>
                        <div className={"column"}>
                            <div className={"title"}>
                                Contact
                            </div>
                            <div className="content">
                                <div className={"block"}>
                                    gilbert.ross1313@gmail.com
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

export default ContactPage;