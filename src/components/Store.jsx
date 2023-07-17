import { BiSupport } from "react-icons/bi"
import "../css/store.css"
import storeMac from "../images/storemac.png"
import storeIphone from "../images/storeiphone.png"
import storeIpad from "../images/storeipad.png"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const latestProducts = [
    {
        name: "IPHONE 14 PRO",
        desc: "Pro. Beyond.",
        price: "From $999 or $41.62/mo. for 24 months before trade-in"
    },
    {
        name: "MACBOOK AIR 15”",
        desc: "Impressively big. Impossibly thin.",
        price: "From $1299 or $108.25/mo. for 12 months"
    },
    {
        name: "MAC STUDIO",
        desc: "Supercharged by M2 Max and M2 Ultra.",
        price: "From $1999 or $166.58/mo. for 12 months"
    },
    {
        name: "LIMITED TIME OFFER",
        desc: "Save on Mac or iPad for College.",
        price: "Plus get a gift card up to $150"
    },
    {
        name: "APPLE WATCH SERIES 8",
        desc: "A healthy leap forward.",
        price: "Plus get a gift card up to $150"
    },
    {
        name: "IPAD AIR",
        desc: "Light. Bright. Full of might.",
        price: "From $599 or $49.91/mo. per month for 24 months"
    },
    {
        name: "IPHONE 14",
        desc: "Wonderfull.",
        price: "From $799 or $33.29/mo.per month for 24 mo.months before trade-in"
    }
]

function Store() {
    const [saveColor, setSaveColor] = useState("rgb(9, 94, 192)")
    const [textColor, setTextColor] = useState("white")

    useEffect(() => {
        setTimeout(() => {
            setSaveColor("")
            setTextColor("")
        }, 1500)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ backgroundColor: "rgb(245, 245, 247)" }}
        >
            <motion.div
                style={{
                    position: "relative",
                    backgroundColor: saveColor,
                    color: textColor
                }}
                initial={{ top: "-100px" }}
                animate={{ top: "0px" }}
                transition={{ duration: 1 }}
                className="credit-text"
                id="saveWrapper"
            >
                Get $200-$640 in credit toward iPhone 14 or iPhone 14 Pro when
                you trade in iPhone 11 or higher.{" "}
                <span className="blue-text">Shop iPhone &#62;</span>
            </motion.div>

            <div className="store-wrapper">
                <div className="store-content">
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
                                    <p className="blue-text">
                                        Find one near you
                                    </p>
                                </div>
                            </div>

                            <div>
                                <BiSupport size={"25px"} />
                                <div>
                                    <p>Need shopping help?</p>
                                    <p className="blue-text">
                                        Ask a Specialist
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mini-products">
                        <Link to="/mac" className="mini-product">
                            <img src={storeMac} />
                            <p>Mac</p>
                        </Link>
                        <Link to="/iphone" className="mini-product">
                            <img src={storeIphone} />
                            <p>iPhone</p>
                        </Link>
                        <Link to="/ipad" className="mini-product">
                            <img src={storeIpad} />
                            <p>iPad</p>
                        </Link>
                    </div>

                    <div>
                        <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                            The latest.{" "}
                            <span style={{ color: "rgb(110,110,115)" }}>
                                Take a look at what’s new, right now.
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="carousel-1-wrapper">
                <div className="carousel-1">
                    <div className="carousel-1-inner">
                        {latestProducts.map((product, i) => {
                            return (
                                <div key={i}>
                                    <p>{product.name}</p>
                                    <p className="carousel-product-desc">
                                        {product.desc}
                                    </p>
                                    <p>{product.price}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="store-wrapper">
                <div className="store-content">
                    <div className="quick-link-wrapper">
                        <p className="quick-links-header">Quick Links</p>
                        <div className="quick-link-btn-wrapper">
                            <button>Order Status</button>
                            <button>Shopping Help</button>
                            <button>Returns</button>
                            <button>Your Saves</button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Store
