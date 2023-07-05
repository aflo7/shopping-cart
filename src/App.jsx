import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Store from "./components/Store"
import Product_iPhone from "./components/Product_iPhone"
import {
    AiOutlineShoppingCart,
    AiOutlineSearch,
    AiFillApple
} from "react-icons/ai"
import "./css/App.css"
import Cart from "./components/Cart"
import { useEffect, useState } from "react"

const initialCart = [
    {
        name: "iPhone 14 Pro",
        desc: "The ultimate iPhone.",
        price: 999,
        size: '6.7" or 6.1"',
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg",
        qty: 0
    },
    {
        name: "iPhone 14",
        desc: "A total powerhouse.",
        price: 799,
        size: '6.7" or 6.1"',
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_14__ct4sjk962pea_large.jpg",
        qty: 0
    },
    {
        name: "iPhone 13",
        desc: "As amazing as ever.",
        price: 599,
        size: '6.1" or 5.4"',
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_13__fqzwhmfmroey_large.jpg",
        qty: 0
    },
    {
        name: "iPhone SE",
        desc: "Serious power. Serious value.",
        price: 429,
        size: '4.7"',
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large.jpg",
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
        cartItems.forEach(item => {
            calculatedTotal += item.price * item.qty
        })
        setTotal(calculatedTotal)
    }, [cartItems])

    return (
        <>
            <BrowserRouter>
                <div className="nav-wrapper">
                    <nav>
                        <div className="nav-left">
                            <AiFillApple />
                            <Link to="/">
                                <p>Store</p>
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
                <main>
                    <div className="content-wrapper">
                        <p className="credit-text">
                            Get $200-$640 in credit toward iPhone 14 or iPhone
                            14 Pro when you trade in iPhone 11 or higher.{" "}
                            <span className="blue-text">Shop iPhone &#62;</span>
                        </p>

                        <Routes>
                            <Route path="/" element={<Store />} />
                            <Route
                                path="/iphone"
                                element={
                                    <Product_iPhone
                                    handleAddCartItem={
                                        handleAddCartItem
                                        }
                                    />
                                }
                            />
                            <Route
                                path="/cart"
                                element={<Cart cartItems={cartItems} total={total} />}
                            />
                        </Routes>
                    </div>
                </main>
            </BrowserRouter>
        </>
    )
}

export default App
