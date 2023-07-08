import "../css/cart.css"

function Cart({ cartItems, total }) {
    return (
        <div className="cart-wrapper">
            <div className="cart-content">
                {total > 0 ? (
                    <>
                        <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                            Your cart total is ${total}
                        </p>

                        <p>Free delivery and free returns</p>

                        <div className="card-info-wrapper">
                            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/applecard-logo-201910?wid=164&hei=164&fmt=jpeg&qlt=90&.v=1572631318807" alt="apple-card-logo" height="30px"></img>
                            <p>
                                Items not purchased with a one time payment may
                                be eligible for $274.83/mo.per month at 0% APR
                                when you check out with Apple Card Monthly
                                Installments.{" "}
                                <span className="blue-text">Learn more</span>
                            </p>
                        </div>

                        <button>Check out</button>
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
                                  <div key={i}>
                                      <p>{item.name}</p>
                                      <p>{item.qty}</p>
                                      <p>${item.qty * item.price}</p>
                                  </div>
                              )
                          } else return null
                      })
                    : null}
            </div>
        </div>
    )
}

export default Cart
