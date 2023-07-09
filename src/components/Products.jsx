import Product from "./Product"
import "../css/products.css"
function Products({
    handleAddCartItem,
    productArr,
    productImgHeight,
    productName
}) {
    return (
        <div className="products-wrapper">
            <p
                style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: "bold"
                }}
            >
                Which {productName} is right for you?
            </p>
            <div className="product-info-wrapper">
                {productArr.map((item, i) => {
                    return (
                        <Product
                            key={i}
                            item={item}
                            handleAddCartItem={handleAddCartItem}
                            productImgHeight={productImgHeight}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Products
