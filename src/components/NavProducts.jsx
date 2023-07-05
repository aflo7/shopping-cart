import '../css/nav-products.css'
function NavProducts({ navProductInfo }) {
    return (
        <div className="top-nav-product-wrapper ">
            <div className="top-nav-products">
                {navProductInfo.map((item, i) => {
                    return (
                        <div key={i}>
                            <img src={item.img} alt={item.name} height="50px" />
                            <p style={{ fontSize: "0.8rem" }}>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NavProducts
