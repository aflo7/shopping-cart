import "../css/cart-item.css"
import { useState } from "react"

function CartItem({ handleItemRemove, cartItem, handleItemQtyChange }) {
    const [removing, setRemoving] = useState(false)
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
                    <img
                        src={cartItem.img}
                        alt={cartItem.name}
                        className="cart-item-img"
                    />
                </div>
                <div className="cart-item-info">
                    <p className="cart-item-info-left">{cartItem.name}</p>
                    <select
                        onChange={(e) =>
                            handleItemQtyChange(cartItem.name, e.target.value)
                        }
                        value={cartItem.qty}
                        name="qty"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <div className="cart-item-info-price">
                        <p>${(cartItem.qty * cartItem.price).toFixed(2)}</p>
                        <button
                            className="removal-button normal"
                            disabled={removing}
                            onClick={() => {
                                removalAnimation(cartItem.name)
                            }}
                        >
                            {removing ? "Removing..." : "Remove"}
                        </button>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default CartItem
