import "../css/product-page-mac.css"
import NavProducts from "./NavProducts"
import Products from "./Products"
import { motion } from "framer-motion"
import productInfo from "../assets/fonts/product-info/product-info"

function ProductPageMac({ handleAddCartItem }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <NavProducts navProductInfo={productInfo.navMacInfo} />
            <p className="credit-text-grey-bg">
                Save on Mac or iPad with education pricing. Plus get a gift card
                up to $150.
                <span className="blue-text"> Shop now &#62;</span>
            </p>

            <div className="product-mac-wrapper">
                <div className="product-mac-content">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "20px",
                            // marginTop: "40px",
                        }}
                    >
                        <p style={{ color: "rgb(243,103,53)" }}>New</p>

                        <p
                            style={{
                                textAlign: "center",
                                fontSize: "3rem",
                                fontWeight: "bold"
                            }}
                        >
                            MacBook Air 15”
                        </p>

                        <p
                            style={{
                                textAlign: "center",
                                fontSize: "1.6rem",
                                fontWeight: "bold"
                            }}
                        >
                            Impressively big. Impossibly thin.
                        </p>

                        <p>From $108.25/mo. for 12 mo. or $1299**</p>
                        <p className="blue-text">Learn more &#62;</p>

                        <img className="mac-img" src="https://www.apple.com/v/mac/home/bu/images/overview/hero/macbook_air__f6z1e32o3866_large.jpg" />
                    </div>

                    <Products
                        handleAddCartItem={handleAddCartItem}
                        productArr={productInfo.macInfo}
                        productImgHeight="100px"
                        productName="Mac"
                    />
                </div>
            </div>

        </motion.div>
    )
}

export default ProductPageMac
