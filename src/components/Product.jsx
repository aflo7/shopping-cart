import "../css/product.css"

function Product({ item, handleAddCartItem, productImgHeight }) {
    return (
        <div className="product">
            <img src={item.img} alt={item.name} height={productImgHeight} />
            <p
                style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    width: "140px",
                    textAlign: "center"
                }}
            >
                {item.name}
            </p>
            <p style={{ width: "150px", textAlign: "center" }}>{item.desc}</p>
            <p>${item.price}</p>

            <button onClick={() => handleAddCartItem(item.name)}>
                Add to cart
            </button>
            <p className="blue-text">Learn more &#62;</p>
        </div>
    )
}

export default Product
