import "../css/cart.css"
import CartItem from "./CartItem"
import { motion } from "framer-motion"

function Cart({ cartItems, total, handleItemRemove }) {
    const renderedCartItems = cartItems.map((item, i) => {
        if (item.qty > 0) {
            return (
                <CartItem
                    handleItemRemove={handleItemRemove}
                    cartItem={item}
                    key={i}
                />
            )
        } else return null
    })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="cart-content">
                {total > 0 ? (
                    <>
                        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                            Review your bag.
                        </p>

                        <p style={{ fontSize: "1.2rem" }}>
                            Free delivery and free returns
                        </p>

                        <div className="card-info-wrapper">
                            <img
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/applecard-logo-201910?wid=164&hei=164&fmt=jpeg&qlt=90&.v=1572631318807"
                                alt="apple-card-logo"
                                height="30px"
                            ></img>
                            <p>
                                Items not purchased with a one time payment may
                                be eligible for $274.83/mo.per month at 0% APR
                                when you check out with Apple Card Monthly
                                Installments.{" "}
                                <span className="blue-text">Learn more</span>
                            </p>
                        </div>
                        {renderedCartItems}
                        <div className="checkout-wrapper">
                            <div>
                                <p>Subtotal</p>
                                <p>${total.toFixed(2)}</p>
                            </div>
                            <div>
                                <p>Shipping</p>
                                <p>Free</p>
                            </div>
                            <div>
                                <p>Estimated tax:</p>
                                <p>${(total * 0.0725).toFixed(2)}</p>
                            </div>
                            <hr></hr>
                            <div>
                                <p style={{ fontWeight: "bold" }}>Total</p>
                                <p style={{ fontWeight: "bold" }}>
                                    ${(total + total * 0.0725).toFixed(2)}
                                </p>
                            </div>
                            <button className="blue-checkout-button">
                                Check out
                            </button>
                        </div>
                    </>
                ) : (
                    <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                        Your cart is empty{" "}
                    </p>
                )}
            </div>
        </motion.div>
    )
}

export default Cart
