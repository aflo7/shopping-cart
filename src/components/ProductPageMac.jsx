import "../css/product-page-mac.css"
import NavProducts from "./NavProducts"
import Products from "./Products"
import { motion } from "framer-motion"
const macInfo = [
    {
        name: "MacBook Air 13”",
        chip: "M1 chip",
        desc: "The most affordable Mac laptop to get things done on the go.",
        price: 999,
        size: '13.3"',
        img: "https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_mba_m1__9d4o64w6wv6m_large_2x.png"
    },
    {
        name: "MacBook Air 13” and 15”",
        chip: "M2 chip",
        desc: "Strikingly thin and fast so you can work, play, or create anywhere.",
        price: 1099,
        size: "13.6” or 15.3”",
        img: "https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_mba_13_15__beo01ewpngky_large_2x.png"
    },
    {
        name: "MacBook Pro 13”",
        chip: "M2 chip",
        desc: "Serious capability in our most portable pro laptop.",
        price: 1299,
        size: '13.3"',
        img: "https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_mbp_13__b9nj45t4tcya_large_2x.png"
    },
    {
        name: "MacBook Pro 14” and 16”",
        chip: "M2 Pro or M2 Max chip",
        desc: "The most advanced Mac laptops for demanding workflows.",
        price: 1999,
        size: '14.2” or 16.2”"',
        img: "https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_mbp_14_16__gmrk71zzfoq6_large_2x.png"
    }
]

const navMacInfo = [
    {
        name: "MacBook Air",
        img: "https://www.apple.com/v/mac/home/bu/images/familybrowser/macbookair_light__f0o95rwae8ae_large.svg"
    },
    {
        name: "MacBook Pro",
        img: "https://www.apple.com/v/mac/home/bu/images/familybrowser/macbook_pro_light__e791sjqzt32a_large.svg"
    },
    {
        name: 'iMac 24"',
        img: "https://www.apple.com/v/mac/home/bu/images/familybrowser/imac_24_light__colyztscbeeu_large.svg"
    },
    {
        name: "Mac mini",
        img: "https://www.apple.com/v/mac/home/bu/images/familybrowser/mac_mini_light__frtahmzmd4mm_large.svg"
    },
    {
        name: "Mac Studio",
        img: "https://www.apple.com/v/mac/home/bu/images/familybrowser/mac_studio_light__ea3pb1auizu6_large.svg"
    },
    {
        name: "Mac Pro",
        img: "https://www.apple.com/v/mac/home/bu/images/familybrowser/mac_pro_light__cj4dvg7thx5y_large.svg"
    }
]

function ProductPageMac({ handleAddCartItem }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <NavProducts navProductInfo={navMacInfo} />
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
                            gap: "10px",
                            marginTop: "40px"
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
                        productArr={macInfo}
                        productImgHeight="100px"
                        productName="Mac"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default ProductPageMac
