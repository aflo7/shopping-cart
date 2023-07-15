import "../css/product-iphone.css"
import Products from "./Products"
import NavProducts from "./NavProducts"
import { motion } from "framer-motion"
import productInfo from "../assets/fonts/product-info/product-info"

function ProductPagePhone({ handleAddCartItem }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <NavProducts navProductInfo={productInfo.navPhoneInfo} />

            <p className="credit-text-grey-bg">
                Get $200-$640 in credit toward iPhone 14 or iPhone 14 Pro when
                you trade in iPhone 11 or higher.{" "}
                <span className="blue-text">Shop iPhone &#62;</span>
            </p>

            <div className="product-iphone-wrapper">
                <div className="product-iphone-content">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "10px"
                        }}
                    >
                        <p
                            style={{
                                textAlign: "center",
                                fontSize: "1.6rem",
                                fontWeight: "bold"
                            }}
                        >
                            iPhone 14
                        </p>
                        <p
                            style={{
                                textAlign: "center",
                                fontSize: "3rem",
                                fontWeight: "bold"
                            }}
                        >
                            Wonderfull.
                        </p>
                        <p>
                            From $799 or $33.29/mo. for 24 mo. before trade‑in
                        </p>
                        <p className="blue-text">Learn more &#62;</p>
                    </div>
                    <img
                        style={{ padding: "40px 20px" }}
                        src="https://www.apple.com/v/iphone/home/bo/images/overview/hero/hero_iphone_14__de41900yuggi_large.jpg"
                    />

                    <Products
                        handleAddCartItem={handleAddCartItem}
                        productArr={productInfo.phoneInfo}
                        productImgHeight="200px"
                        productName="iPhone"
                    />
                </div>
            </div>
        </motion.div>
    )
}
export default ProductPagePhone
