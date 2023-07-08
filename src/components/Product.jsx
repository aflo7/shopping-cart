import "../css/product.css"

function Product({ item, handleAddCartItem, productImgHeight }) {
    const { img, name, desc, price } = item
    return (
        <div className="product">
            <img src={img} alt={name} height={productImgHeight} />
            <p
                style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    width: "140px",
                    textAlign: "center"
                }}
            >
                {name}
            </p>
            <p style={{ width: "150px", textAlign: "center" }}>{desc}</p>
            <p>${price}</p>

            <button
                className="add-to-cart-button"
                onClick={() => handleAddCartItem(name)}
            >
                Add to cart
            </button>
            <p className="blue-text">Learn more &#62;</p>
        </div>
    )
}

export default Product
