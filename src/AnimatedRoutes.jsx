import { AnimatePresence } from "framer-motion"
import { useLocation, Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Store from "./components/Store"
import ProductPageMac from "./components/product-page-mac"
import ProductPagePhone from "./components/product-page-iphone"
import Cart from "./components/Cart"
import ProductPagePad from "./components/product-page-ipad"
import {
    AiOutlineShoppingCart,
    AiOutlineSearch,
    AiFillApple
} from "react-icons/ai"
import Footer from "./components/Footer"

function AnimatedRoutes({
    handleAddCartItem,
    cartItems,
    total,
    handleItemRemove
}) {
    const location = useLocation()

    const navStyles =
        location.pathname === "/ipad"
            ? {
                  backgroundColor: "black",
                  color: "white"
              }
            : {}
    const textStyles =
        location.pathname === "/ipad"
            ? {
                  color: "white"
              }
            : {}

    return (
        <AnimatePresence>
            <div style={navStyles} className="nav-wrapper">
                <nav>
                    <div className="nav-left">
                        <AiFillApple style={textStyles} />
                        <Link to="/">
                            <p style={textStyles}>Store</p>
                        </Link>

                        <Link to="/mac">
                            <p style={textStyles}>Mac</p>
                        </Link>

                        <Link to="/ipad">
                            <p style={textStyles}>iPad</p>
                        </Link>

                        <Link to="/iphone">
                            <p style={textStyles}>iPhone</p>
                        </Link>
                    </div>

                    <div className="nav-right">
                        <AiOutlineSearch style={textStyles} className="search-icon" />

                        <Link to="/cart">
                            <AiOutlineShoppingCart style={textStyles}/>
                        </Link>
                    </div>
                </nav>
            </div>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Store />} />
                <Route
                    path="/mac"
                    element={
                        <ProductPageMac handleAddCartItem={handleAddCartItem} />
                    }
                />
                <Route
                    path="/iphone"
                    element={
                        <ProductPagePhone
                            handleAddCartItem={handleAddCartItem}
                        />
                    }
                />
                <Route
                    path="/ipad"
                    element={
                        <ProductPagePad handleAddCartItem={handleAddCartItem} />
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cartItems={cartItems}
                            total={total}
                            handleItemRemove={handleItemRemove}
                        />
                    }
                />
            </Routes>

            <Footer />
        </AnimatePresence>
    )
}

export default AnimatedRoutes
