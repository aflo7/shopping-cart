import "../css/product-iphone.css"
import Products from "./Products"
import NavProducts from "./NavProducts"
import { motion } from "framer-motion"

const phoneInfo = [
    {
        name: "iPhone 14 Pro",
        desc: "The ultimate iPhone.",
        price: 999,
        size: '6.7" or 6.1"',
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg"
    },
    {
        name: "iPhone 14",
        desc: "A total powerhouse.",
        price: 799,
        size: '6.7" or 6.1"',
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_14__ct4sjk962pea_large.jpg"
    },
    {
        name: "iPhone 13",
        desc: "As amazing as ever.",
        price: 599,
        size: '6.1" or 5.4"',
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_13__fqzwhmfmroey_large.jpg"
    },
    {
        name: "iPhone SE",
        desc: "Serious power. Serious value.",
        price: 429,
        size: '4.7"',
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large.jpg"
    }
]

const navPhoneInfo = [
    {
        name: "iPhone 14 Pro",
        img: "https://www.apple.com/v/iphone/home/bo/images/chapternav/iphone_14_pro_light__dfhcc00ur2oi_large.svg"
    },
    {
        name: "iPhone 14",
        img: "https://www.apple.com/v/iphone/home/bo/images/chapternav/iphone_14_light__fwknsxkf80uq_large.svg"
    },
    {
        name: "iPhone 13",
        img: "https://www.apple.com/v/iphone/home/bo/images/chapternav/iphone_13_light__ewo3e0sf67o2_large.svg"
    },
    {
        name: "iPhone SE",
        img: "https://www.apple.com/v/iphone/home/bo/images/chapternav/iphone_se_light__fhg8duy6ffau_large.svg"
    },
    {
        name: "iPhone 12",
        img: "https://www.apple.com/v/iphone/home/bo/images/chapternav/iphone_12_light__cxh2ll1zwpw2_large.svg"
    }
]

function ProductPagePhone({ handleAddCartItem }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <NavProducts navProductInfo={navPhoneInfo} />

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
                            gap: "10px",
                            marginTop: "40px"
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
                        productArr={phoneInfo}
                        productImgHeight="200px"
                        productName="iPhone"
                    />
                </div>
            </div>

        </motion.div>
    )
}
export default ProductPagePhone
