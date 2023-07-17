import { BrowserRouter as Router } from "react-router-dom"
import "./css/App.css"
import { useEffect, useState } from "react"
import AnimatedRoutes from "./AnimatedRoutes"
import productInfo from "./assets/fonts/product-info/product-info"
import ScrollToTop from "./ScrollToTop"

function App() {
    const [cartItems, setCartItems] = useState(productInfo.initialCart)
    const [total, setTotal] = useState(0)

    function handleAddCartItem(itemName) {
        const currentCartItems = [...cartItems]
        setCartItems(
            currentCartItems.map((cartItem) => {
                if (cartItem.name === itemName) {
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
        currentCartItems.forEach((item) => {
            if (item.name === itemName) {
                item.qty = 0
            }
        })
        setCartItems(currentCartItems)
    }

    useEffect(() => {
        let calculatedTotal = 0
        cartItems.forEach((item) => {
            calculatedTotal += item.price * item.qty
        })
        setTotal(calculatedTotal)
    }, [cartItems])

    return (
        <Router basename="/shopping-cart">
            <ScrollToTop />
            <AnimatedRoutes
                handleAddCartItem={handleAddCartItem}
                cartItems={cartItems}
                total={total}
                handleItemRemove={handleItemRemove}
            />
        </Router>
    )
}

export default App
