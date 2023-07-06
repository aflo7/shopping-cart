import { BrowserRouter, Link } from "react-router-dom"
import {
    AiOutlineShoppingCart,
    AiOutlineSearch,
    AiFillApple
} from "react-icons/ai"
import "./css/App.css"
import Cart from "./components/Cart"
import { useEffect, useState } from "react"
import AnimatedRoutes from "./AnimatedRoutes"

const initialCart = [
    {
        name: "iPhone 14 Pro",
        price: 999,
        qty: 0
    },
    {
        name: "iPhone 14",
        price: 799,
        qty: 0
    },
    {
        name: "iPhone 13",
        price: 599,
        qty: 0
    },
    {
        name: "iPhone SE",
        price: 429,
        qty: 0
    },

    {
        name: "MacBook Air 13”",
        price: 999,
        qty: 0
    },
    {
        name: "MacBook Air 13” and 15”",
        price: 1099,
        qty: 0
    },
    {
        name: "MacBook Pro 13”",
        price: 1299,
        qty: 0
    },
    {
        name: "MacBook Pro 14” and 16”",
        price: 1999,
        qty: 0
    }
]

function App() {
    const [cartItems, setCartItems] = useState(initialCart)
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

    useEffect(() => {
        let calculatedTotal = 0
        cartItems.forEach((item) => {
            calculatedTotal += item.price * item.qty
        })
        setTotal(calculatedTotal)
    }, [cartItems])

    return (
        <BrowserRouter>
            <div className="nav-wrapper">
                <nav>
                    <div className="nav-left">
                        <AiFillApple />
                        <Link to="/">
                            <p>Store</p>
                        </Link>

                        <Link to="/mac">
                            <p>Mac</p>
                        </Link>

                        <Link to="/ipad">
                            <p>iPad</p>
                        </Link>

                        <Link to="/iphone">
                            <p>iPhone</p>
                        </Link>
                    </div>

                    <div className="nav-right">
                        <AiOutlineSearch />

                        <Link to="/cart" element={<Cart />}>
                            <AiOutlineShoppingCart />
                        </Link>
                    </div>
                </nav>
            </div>

            <AnimatedRoutes
                handleAddCartItem={handleAddCartItem}
                cartItems={cartItems}
                total={total}
            />
        </BrowserRouter>
    )
}

export default App
