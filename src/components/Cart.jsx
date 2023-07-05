function Cart({ cartItems, total }) {
    if (total > 0) {
        return (
            <>
                <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                    Your cart total is ${total}
                </p>

                <p>Free delivery and free returns</p>

                <button>Check out</button>

                <div>
                    {cartItems.map((item, i) => {
                        if (item.qty > 0) {
                            return (
                                <div key={i}>
                                    {item.name} {item.qty} $
                                    {item.qty * item.price}
                                </div>
                            )
                        } else return null
                    })}
                </div>
            </>
        )
    } else {
        return (
            <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                Your cart is empty{" "}
            </p>
        )
    }
}

export default Cart
