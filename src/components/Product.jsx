import "../css/product.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import loading from '../images/loading.gif'

function Product({ item, handleAddCartItem, productImgHeight }) {
    const { img, name, desc, price } = item
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    function animateAddToCart(itemName) {
        setLoading(true)
        handleAddCartItem(itemName)

        setTimeout(() => {
            navigate("/cart")
        }, 1000)
    }
    return (
        <div className="product">
            <img src={img} alt={name} height={productImgHeight} />

            <div className="product-name-wrapper ">
                <p className="product-name">{name}</p>
            </div>

            <div className="product-desc-wrapper">
                <p>{desc}</p>
            </div>

            <p>${price}</p>
            <button
                className="add-to-cart-button"
                onClick={() => animateAddToCart(name)}
                disabled={loading}
            >
                {loading ? "Adding...": "Add to cart"}
            </button>
            <p className="blue-text">Learn more &#62;</p>
        </div>
    )
}

export default Product
