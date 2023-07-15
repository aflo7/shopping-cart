import { motion } from "framer-motion"
import NavProducts from "./NavProducts"
import Products from "./Products"
import "../css/product-page-ipad.css"
import { AiOutlinePlayCircle } from "react-icons/ai"
import productInfoIpad from "../assets/fonts/product-info/product-info-ipad"

function ProductPagePad({ handleAddCartItem }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                backgroundColor: "black",
                color: "white"
            }}
        >
            <motion.div
                style={{ position: "relative" }}
                initial={{ left: "1000px" }}
                animate={{ left: "0px" }}
                transition={{ duration: "0.5" }}
            >
                <NavProducts navProductInfo={productInfoIpad.navPadInfo} />
            </motion.div>
            <p className="credit-text-darkgray-bg">
                Save on Mac or iPad with education pricing. Plus get a gift card
                up to $150.
                <span className="blue-text-lighter"> Shop now &#62;</span>
            </p>

            <div className="flex-group">
                <img
                    className="flex-group-img"
                    src="https://www.apple.com/v/ipad/home/cf/images/overview/hero/fcp_ipad_hero__e663fdl2htea_large.png"
                />
                <div className="center-text">
                    <p>Introducing</p>

                    <p
                    className="center-text-header"
                       
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
                    className="flex-group-img"
                    src="https://www.apple.com/v/ipad/home/cf/images/overview/hero/lp_ipad_hero__ec9vtoqzs0a6_large.png"
                />

                <img
                    className="flex-group-img-mobile"
                    src="https://www.apple.com/v/ipad/home/cf/images/overview/hero/lp_ipad_hero__ec9vtoqzs0a6_large.png"
                />
            </div>

            <div className="product-pad-wrapper">
                <div className="product-pad-content">
                    <Products
                        handleAddCartItem={handleAddCartItem}
                        productArr={productInfoIpad.padInfo}
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
