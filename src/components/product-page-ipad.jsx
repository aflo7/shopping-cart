import { motion } from "framer-motion"
import NavProducts from "./NavProducts"
import Products from "./Products"
import "../css/product-page-pad.css"
import { AiOutlinePlayCircle } from "react-icons/ai"

const padInfo = [
    {
        name: "iPad Pro",
        desc: "The ultimate iPad experience with the most advanced technology.",
        price: 799,
        img: "https://www.apple.com/v/ipad/home/cf/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png"
    },
    {
        name: "iPad Air",
        desc: "Serious performance in a thin and light design.",
        price: 599,
        img: "https://www.apple.com/v/ipad/home/cf/images/overview/compare_ipad_air__bxjv33pk6nte_large.png"
    },
    {
        name: "iPad 10",
        desc: "The all-new colorful iPad for the things you do every day.",
        price: 449,
        img: "https://www.apple.com/v/ipad/home/cf/images/overview/compare_ipad_10_9__f7p2wja0gwuy_large.png"
    },
    {
        name: "iPad 9",
        desc: "All the essentials in the most affordable iPad.",
        price: 329,
        img: "https://www.apple.com/v/ipad/home/cf/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png"
    },
    {
        name: "iPad mini",
        desc: "The full iPad experience designed to fit in one hand.",
        price: 499,
        img: "https://www.apple.com/v/ipad/home/cf/images/overview/compare_ipad_mini__czcsk9ukpeie_large.png"
    }
]

const navPadInfo = [
    {
        name: "iPad Pro",
        img: "https://www.apple.com/v/ipad/home/cf/images/chapternav/ipadpro_dark__175htbn6m76u_large.svg"
    },
    {
        name: "iPad Air",
        img: "https://www.apple.com/v/ipad/home/cf/images/chapternav/ipadair_dark__gi1t1iqta1yu_large.svg"
    },
    {
        name: "iPad",
        img: "https://www.apple.com/v/ipad/home/cf/images/chapternav/ipad_dark__fe8ocv9hktim_large.svg"
    },
    {
        name: "iPad mini",
        img: "https://www.apple.com/v/ipad/home/cf/images/chapternav/ipadmini_dark__cdfcygd422uu_large.svg"
    },
    {
        name: "Compare",
        img: "https://www.apple.com/v/ipad/home/cf/images/chapternav/ipad_compare_dark__cxllw9w1tuy6_large.svg"
    },
    {
        name: "Apple Pencil",
        img: "https://www.apple.com/v/ipad/home/cf/images/chapternav/apple_pencil_dark__c42qcvi9e802_large.svg"
    },
    {
        name: "Keyboards",
        img: "https://www.apple.com/v/ipad/home/cf/images/chapternav/keyboard_dark__dtedyad0xnqu_large.svg"
    }
]

function ProductPagePad({ handleAddCartItem }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ backgroundColor: "black", color: "white" }}
        >
            <NavProducts navProductInfo={navPadInfo} />

            <p className="credit-text-darkgray-bg">
                Save on Mac or iPad with education pricing. Plus get a gift card
                up to $150.
                <span className="blue-text-lighter"> Shop now &#62;</span>
            </p>

            <div className="flex-group">
                <img
                    src="https://www.apple.com/v/ipad/home/cf/images/overview/hero/fcp_ipad_hero__e663fdl2htea_large.png"
                    height="80%"
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                        marginTop: "40px",
                        width: "400px",
                        flexShrink: 0
                    }}
                >
                    <p>Introducing</p>

                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "3rem",
                            fontWeight: "bold"
                        }}
                    >
                        Final Cut Pro and Logic Pro for iPad
                    </p>

                    <p className="blue-text-lighter">
                        Learn more about Final Cut Pro for iPad &#62;
                    </p>
                    <p className="blue-text-lighter">
                        Learn more about Logic Pro for iPad &#62;
                    </p>
                    <div
                        className="blue-text-lighter"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px"
                        }}
                    >
                        <p>Watch the film</p>
                        <AiOutlinePlayCircle />
                    </div>
                </div>

                <img
                    src="https://www.apple.com/v/ipad/home/cf/images/overview/hero/lp_ipad_hero__ec9vtoqzs0a6_large.png"
                    height="80%"
                />
            </div>

            <div className="product-pad-wrapper">
                <div className="product-pad-content">
                    <Products
                        handleAddCartItem={handleAddCartItem}
                        productArr={padInfo}
                        productImgHeight="160px"
                        productName="iPad"
                        lighterBlueText="true"
                    />
                </div>
            </div>

        </motion.div>
    )
}

export default ProductPagePad
