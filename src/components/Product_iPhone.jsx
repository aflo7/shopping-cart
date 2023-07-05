import "../css/iPhone.css"

const phoneInfo = [
    {
        name: "iPhone 14 Pro",
        desc: "The ultimate iPhone.",
        price: "$999",
        size: '6.7" or 6.1"'
    },
    {
        name: "iPhone 14",
        desc: "A total powerhouse.",
        price: "$799",
        size: '6.7" or 6.1"'
    },
    {
        name: "iPhone 13",
        desc: "As amazing as ever.",
        price: "$599",
        size: '6.1" or 5.4"'
    },
    {
        name: "iPhone SE",
        desc: "Serious power. Serious value.",
        price: "$429",
        size: '4.7"'
    }
]

function Product_iPhone() {
    return (
        <div className="iphone">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: "20px"
                }}
            >
                <h4>iPhone 14</h4>
                <h1>Wonderfull.</h1>
                <p>From $799 or $33.29/mo. for 24 mo. before trade‑in</p>
                <p className="blue-text">Learn more &#62;</p>
            </div>
            <img
                src="https://www.apple.com/v/iphone/home/bo/images/overview/hero/hero_iphone_14__de41900yuggi_large.jpg"
                width={"100%"}
                style={{ marginTop: "20px" }}
            ></img>

            <div>
                <h1>Which iPhone is right for you?</h1>
                <div>
                    {phoneInfo.map((item, i) => {
                        return (
                            <div key={i}>
                                <h4>{item.name}</h4>
                                <button>Add to cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Product_iPhone
