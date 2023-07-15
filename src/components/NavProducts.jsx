import "../css/nav-products.css"
import { motion } from "framer-motion"

function NavProducts({ navProductInfo, backgroundColor }) {
    return (
        <div
            className="top-nav-product-wrapper "
            style={{
                zIndex: "1",
                backgroundColor: backgroundColor,
                position: 'relative'
            }}
        >
            <motion.div
                initial={{ left: "1000px" }}
                animate={{ left: "0px" }}
                transition={{ duration: "0.5" }}
                className="top-nav-products"
            >
                {navProductInfo.map((item, i) => {
                    return (
                        <div key={i} style={{ flexShrink: "0" }}>
                            <img src={item.img} alt={item.name} height="50px" />
                            <p style={{ fontSize: "0.8rem" }}>{item.name}</p>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default NavProducts
