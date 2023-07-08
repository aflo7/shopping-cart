import "../css/cart-item.css"
import { useState } from "react"
import loadingGif from "../images/loading.gif"

function CartItem({ handleItemRemove, cartItem }) {
    const [removing, setRemoving] = useState(false)
    const { img, name, price, qty } = cartItem

    function removalAnimation(itemName) {
        setRemoving(true)
        setTimeout(() => {
            handleItemRemove(itemName)
        }, 1500)
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
                            .00
                        </p>
                        <button
                            className="removal-button normal"
                            disabled={removing}
                            onClick={() => {
                                removalAnimation(name)
                            }}
                        >
                            {removing ? (
                                <img
                                    height="20px"
                                    src={loadingGif}
                                    alt="Loading icon"
                                />
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
