import "../css/cart.css"
import CartItem from "./CartItem"
import { motion } from "framer-motion"

function Cart({ cartItems, total, handleItemRemove }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="cart-wrapper"
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
                    </>
                ) : (
                    <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                        Your cart is empty{" "}
                    </p>
                )}

                {total > 0
                    ? cartItems.map((item, i) => {
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
                    : null}

                {total > 0 ? (
                    <button className="blue-checkout-button">Check out</button>
                ) : null}
            </div>
        </motion.div>
    )
}

export default Cart
