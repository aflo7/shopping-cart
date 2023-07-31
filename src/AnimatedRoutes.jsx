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
import { useState, useEffect } from "react"
import productInfo from "./assets/fonts/product-info/product-info"
import "./css/animated-routes.css"

function AnimatedRoutes() {
    const location = useLocation()
    const [cartItems, setCartItems] = useState(productInfo.initialCart)
    const [total, setTotal] = useState(0)

    function handleAddCartItem(itemName) {
        const currentCartItems = [...cartItems]
        setCartItems(
            currentCartItems.map((cartItem) => {
                if (cartItem.name === itemName && cartItem.qty < 5) {
                    cartItem.qty++
                    return cartItem
                } else {
                    return cartItem
                }
            })
        )
    }

    function handleItemRemove(itemName) {
        const currentCartItems = [...cartItems]
        currentCartItems.forEach((cartItem) => {
            if (cartItem.name === itemName) {
                cartItem.qty = 0
            }
        })
        setCartItems(currentCartItems)
    }

    function handleItemQtyChange(itemName, updatedQuantity) {
        const currentCartItems = [...cartItems]
        currentCartItems.forEach((cartItem) => {
            if (cartItem.name === itemName) {
                cartItem.qty = updatedQuantity
            }
        })
        setCartItems(currentCartItems)
    }

    useEffect(() => {
        let calculatedTotal = 0
        cartItems.forEach((cartItem) => {
            calculatedTotal += cartItem.price * cartItem.qty
        })
        setTotal(calculatedTotal)
    }, [cartItems])

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
                        <AiOutlineSearch
                            style={textStyles}
                            className="search-icon"
                        />

                        <Link to="/cart">
                            <AiOutlineShoppingCart style={textStyles} />
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
                            handleItemQtyChange={handleItemQtyChange}
                        />
                    }
                />
            </Routes>
            <Footer />
        </AnimatePresence>
    )
}

export default AnimatedRoutes
