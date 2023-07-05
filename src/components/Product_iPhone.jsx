import "../css/product-iphone.css"

const phoneInfo = [
    {
        name: "iPhone 14 Pro",
        desc: "The ultimate iPhone.",
        price: 999,
        size: '6.7" or 6.1"',
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg"
    },
    {
        name: "iPhone 14",
        desc: "A total powerhouse.",
        price: 799,
        size: '6.7" or 6.1"',
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_14__ct4sjk962pea_large.jpg"
    },
    {
        name: "iPhone 13",
        desc: "As amazing as ever.",
        price: 599,
        size: '6.1" or 5.4"',
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_13__fqzwhmfmroey_large.jpg"
    },
    {
        name: "iPhone SE",
        desc: "Serious power. Serious value.",
        price: 429,
        size: '4.7"',
        img: "https://www.apple.com/v/iphone/home/bo/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large.jpg"
    }
]

const navPhoneInfo = [
    {
        name: "iPhone 14 Pro",
        img: "https://www.apple.com/v/iphone/home/bo/images/chapternav/iphone_14_pro_light__dfhcc00ur2oi_large.svg"
    },
    {
        name: "iPhone 14",
        img: "https://www.apple.com/v/iphone/home/bo/images/chapternav/iphone_14_light__fwknsxkf80uq_large.svg"
    },
    {
        name: "iPhone 13",
        img: "https://www.apple.com/v/iphone/home/bo/images/chapternav/iphone_13_light__ewo3e0sf67o2_large.svg"
    },
    {
        name: "iPhone SE",
        img: "https://www.apple.com/v/iphone/home/bo/images/chapternav/iphone_se_light__fhg8duy6ffau_large.svg"
    },
    {
        name: "iPhone 12",
        img: "https://www.apple.com/v/iphone/home/bo/images/chapternav/iphone_12_light__cxh2ll1zwpw2_large.svg"
    }
]

function Product_iPhone({ handleAddCartItem }) {
    return (
        <>

        <div className="top-nav-phones-wrapper">

        
            <div className="top-nav-phones">
                {navPhoneInfo.map((item, i) => {
                    return (
                        <div key={i}>
                            <img src={item.img} alt={item.name} height="50px"/>
                            <p style={{fontSize: '0.8rem'}}>{item.name}</p>
                        </div>
                    )
                })}
            </div>
            </div>
            <p className="credit-text grey-bg">
                Get $200-$640 in credit toward iPhone 14 or iPhone 14 Pro when
                you trade in iPhone 11 or higher.{" "}
                <span className="blue-text">Shop iPhone &#62;</span>
            </p>

            <div className="product-iphone-wrapper">
                <div className="product-iphone-content">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "10px",
                            marginTop: "40px"
                        }}
                    >
                        <p
                            style={{
                                textAlign: "center",
                                fontSize: "1.6rem",
                                fontWeight: "bold"
                            }}
                        >
                            iPhone 14
                        </p>
                        <p
                            style={{
                                textAlign: "center",
                                fontSize: "3rem",
                                fontWeight: "bold"
                            }}
                        >
                            Wonderfull.
                        </p>
                        <p>
                            From $799 or $33.29/mo. for 24 mo. before trade‑in
                        </p>
                        <p className="blue-text">Learn more &#62;</p>
                    </div>

                    <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                        <img
                            src="https://www.apple.com/v/iphone/home/bo/images/overview/hero/hero_iphone_14__de41900yuggi_large.jpg"
                            width={"100%"}
                        ></img>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="phone-content">
                            <p
                                style={{
                                    textAlign: "center",
                                    fontSize: "2rem",
                                    fontWeight: "bold"
                                }}
                            >
                                Which iPhone is right for you?
                            </p>
                            <div className="phone-info-wrapper">
                                {phoneInfo.map((item, i) => {
                                    return (
                                        <div className="phone-info" key={i}>
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                height={"250px"}
                                            />
                                            <p
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: "1.2rem"
                                                }}
                                            >
                                                {item.name}
                                            </p>
                                            <p>{item.desc}</p>
                                            <p>${item.price}</p>

                                            <button
                                                onClick={() =>
                                                    handleAddCartItem(item.name)
                                                }
                                            >
                                                Add to cart
                                            </button>
                                            <p className="blue-text">
                                                Learn more &#62;
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product_iPhone
