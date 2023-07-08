import { AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Store from "./components/Store"
import ProductPageMac from "./components/ProductPageMac"
import ProductPagePhone from "./components/ProductPagePhone"
import Cart from "./components/Cart"

function AnimatedRoutes({ handleAddCartItem, cartItems, total }) {
    const location = useLocation()

    return (
        <AnimatePresence>
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
                    path="/cart"
                    element={<Cart cartItems={cartItems} total={total} />}
                />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes