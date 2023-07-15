import "../css/cart-item.css"
import { useState } from "react"

function CartItem({ handleItemRemove, cartItem }) {
    const [removing, setRemoving] = useState(false)
    const { img, name, price, qty } = cartItem

    function removalAnimation(itemName) {
        setRemoving(true)
        setTimeout(() => {
            handleItemRemove(itemName)
        }, 1000)
    }
    return (
        <div>
            <div className="cart-item">
                <div className="cart-item-img-wrapper">
                    <img src={img} alt={name} className="cart-item-img" />
                </div>
                <div className="cart-item-info">
                    <p className="cart-item-info-left">{name}</p>
                    <p>{qty}</p>
                    <div className="cart-item-info-price">
                        <p>
                            ${qty * price}
                        </p>
                        <button
                            className="removal-button normal"
                            disabled={removing}
                            onClick={() => {
                                removalAnimation(name)
                            }}
                        >
                            {removing ? (
                                "Removing..."
                            ) : (
                                "Remove"
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default CartItem
