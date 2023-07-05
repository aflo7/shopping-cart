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

function App() {
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
                            <AiOutlineShoppingCart />
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
                                element={<Product_iPhone />}
                            />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </div>
                </main>
            </BrowserRouter>
        </>
    )
}

export default App
