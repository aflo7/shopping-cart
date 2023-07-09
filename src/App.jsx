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
        qty: 0,
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg"
    },
    {
        name: "iPhone 14",
        price: 799,
        qty: 0,
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_14__ct4sjk962pea_large.jpg"
    },
    {
        name: "iPhone 13",
        price: 599,
        qty: 0,
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_13__fqzwhmfmroey_large.jpg"
    },
    {
        name: "iPhone SE",
        price: 429,
        qty: 0,
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large.jpg"
    },

    {
        name: "MacBook Air 13”",
        price: 999,
        qty: 0,
        img: "https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_mba_m1__9d4o64w6wv6m_large_2x.png"
    },
    {
        name: "MacBook Air 13” and 15”",
        price: 1099,
        qty: 0,
        img: "https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_mba_13_15__beo01ewpngky_large_2x.png"
    },
    {
        name: "MacBook Pro 13”",
        price: 1299,
        qty: 0,
        img: "https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_mbp_13__b9nj45t4tcya_large_2x.png"
    },
    {
        name: "MacBook Pro 14” and 16”",
        price: 1999,
        qty: 0,
        img: "https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_mbp_14_16__gmrk71zzfoq6_large_2x.png"
    },

    {
        name: "iPad Pro",
        price: 799,
        qty: 0,
        img: "https://www.apple.com/v/ipad/home/cf/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png"
    },
    {
        name: "iPad Air",
        price: 599,
        qty: 0,
        img: "https://www.apple.com/v/ipad/home/cf/images/overview/compare_ipad_air__bxjv33pk6nte_large.png"
    },
    {
        name: "iPad 10",
        price: 449,
        qty: 0,
        img: "https://www.apple.com/v/ipad/home/cf/images/overview/compare_ipad_10_9__f7p2wja0gwuy_large.png"
    },
    {
        name: "iPad 9",
        price: 329,
        qty: 0,
        img: "https://www.apple.com/v/ipad/home/cf/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png"
    },
    {
        name: "iPad mini",
        price: 499,
        qty: 0,
        img: "https://www.apple.com/v/ipad/home/cf/images/overview/compare_ipad_mini__czcsk9ukpeie_large.png"
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
        <BrowserRouter basename="/shopping-cart">
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
                        <AiOutlineSearch className="search-icon" />

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
                handleItemRemove={handleItemRemove}
            />
        </BrowserRouter>
    )
}

export default App
