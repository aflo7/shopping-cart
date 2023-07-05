// import React from 'react'
import { BiSupport } from "react-icons/bi"
import "../css/Store.css"
import storeMac from "../images/storemac.png"
import storeIphone from "../images/storeiphone.png"
import storeIpad from "../images/storeipad.png"
import { Link } from "react-router-dom"
function Store() {
    return (
        <div className="store">
            <div className="store-top">
                <div>
                    <p className="store-header">
                        Store.{" "}
                        <span style={{ color: "rgb(110,110,115)" }}>
                            The best way to buy the products you love.
                        </span>
                    </p>
                </div>

                <div className="help-wrapper">
                    <div>
                        <BiSupport size={"25px"} />
                        <div>
                            <p>Visit an Apple Store near you</p>
                            <p className="blue-text">Find one near you</p>
                        </div>
                    </div>

                    <div>
                        <BiSupport size={"25px"} />
                        <div>
                            <p>Need shopping help?</p>
                            <p className="blue-text">Ask a Specialist</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="products">
                <div className="product">
                    <img src={storeMac} />
                    <p>Mac</p>
                </div>
                    <Link to="/iphone" className="product">
                        <img src={storeIphone} />
                        <p>iPhone</p>
                    </Link>
                <div className="product">
                    <img src={storeIpad} />
                    <p>iPad</p>
                </div>
            </div>

            <div>
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                    The latest.{" "}
                    <span style={{ color: "rgb(110,110,115)" }}>
                        Take a look at what’s new, right now.
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Store
