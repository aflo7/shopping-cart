import "../css/footer.css"
import { motion } from "framer-motion"
import { useState } from "react"

function Footer() {
    const [dropdowns, setDropdowns] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false
    })

    function handleDropdownChange(i) {
        const curr = { ...dropdowns }
        curr[i] = !curr[i]
        setDropdowns(curr)
    }
    return (
        <div className="terms-wrapper">
            <div className="terms-content">
                <p>
                    * Pricing for iPhone 14 and iPhone 14 Plus includes a $30
                    connectivity discount that requires activation with AT&T,
                    T-Mobile, or Verizon. Pricing shown for iPhone 13 and iPhone
                    13 mini includes a $30 connectivity discount for Verizon
                    customers that requires activation and would otherwise be
                    $30 higher for all other customers.
                </p>

                <p>
                    ** Apple Card Monthly Installments (ACMI) is a 0% APR
                    payment option that is only available if you select it at
                    checkout in the U.S. for eligible Apple products purchased
                    at Apple Store locations, apple.com, the Apple Store app, or
                    by calling 1-800-MY-APPLE, and is subject to credit approval
                    and credit limit. See support.apple.com/kb/HT211204 for more
                    information about eligible products. Variable APRs for Apple
                    Card other than ACMI range from 15.99% to 26.99% based on
                    creditworthiness. Rates as of June 1, 2023. If you buy an
                    ACMI eligible product by choosing to pay in full with Apple
                    Card (instead of using ACMI), that purchase is subject to
                    the Apple Card variable APR, not 0% APR. Taxes and shipping
                    on ACMI purchases are subject to the variable APR, not 0%
                    APR. Currently, carrier connection with AT&T, T-Mobile, or
                    Verizon is required for all iPhone purchases made with ACMI
                    from Apple Store locations only. Starting August 15, 2023,
                    carrier connection with AT&T, T-Mobile, or Verizon is
                    required for all iPhone purchases made with ACMI. Starting
                    August 15, 2023, the ACMI installment term for new Apple
                    Watch purchases will change from 24 months to 12 months.
                    ACMI is not available for purchases made online at the
                    following special stores: Apple Employee Purchase Plan;
                    participating corporate Employee Purchase Programs; Apple at
                    Work for small businesses; Government, and Veterans and
                    Military Purchase Programs, or on refurbished devices. ACMI
                    financing is subject to change at any time for any reason,
                    including but not limited to, installment term lengths and
                    eligible products. See support.apple.com/kb/HT211204 for
                    information about upcoming changes to ACMI financing. See
                    the Apple Card Customer Agreement for more information about
                    ACMI financing.
                </p>

                <p>
                    To access and use all Apple Card features and products
                    available only to Apple Card users, you must add Apple Card
                    to Wallet on an iPhone or iPad that supports and has the
                    latest version of iOS or iPadOS. Apple Card is subject to
                    credit approval, available only for qualifying applicants in
                    the United States, and issued by Goldman Sachs Bank USA,
                    Salt Lake City Branch.
                </p>

                <p>
                    If you reside in the U.S. territories, please call Goldman
                    Sachs at 877-255-5923 with questions about Apple Card.
                </p>

                <ol>
                    <li>
                        Trade-in values will vary based on the condition, year,
                        and configuration of your eligible trade-in device. Not
                        all devices are eligible for credit. You must be at
                        least 18 years old to be eligible to trade in for credit
                        or for an Apple Gift Card. Trade-in value may be applied
                        toward qualifying new device purchase, or added to an
                        Apple Gift Card. Actual value awarded is based on
                        receipt of a qualifying device matching the description
                        provided when estimate was made. Sales tax may be
                        assessed on full value of a new device purchase.
                        In-store trade-in requires presentation of a valid photo
                        ID (local law may require saving this information).
                        Offer may not be available in all stores, and may vary
                        between in-store and online trade-in. Some stores may
                        have additional requirements. Apple or its trade-in
                        partners reserve the right to refuse or limit quantity
                        of any trade-in transaction for any reason. More details
                        are available from Apple&apos;s trade-in partner for
                        trade-in and recycling of eligible devices. Restrictions
                        and limitations may apply.
                    </li>
                    <li>
                        Pricing for iPhone 14 and iPhone 14 Plus includes a $30
                        connectivity discount that requires activation with
                        AT&T, T‑Mobile, or Verizon. Monthly pricing is available
                        in the U.S, requires a 24-month installment loan, and is
                        only available when you select Citizens One or Apple
                        Card Monthly Installments (ACMI) as a payment option at
                        checkout. Subject to credit approval and credit limit.
                        Currently, carrier connection with AT&T, T-Mobile, or
                        Verizon is required for all iPhone purchases made with
                        ACMI from Apple Store locations only. Starting August
                        15, 2023, iPhone activation required with AT&T,
                        T-Mobile, or Verizon for purchases made with ACMI at
                        Apple Store locations, apple.com, the Apple Store app,
                        or by calling 1-800-MY-APPLE. Taxes and shipping are not
                        included in ACMI and are subject to your card&apos;s
                        variable APR. Additional Apple Card Monthly Installments
                        terms are in the Apple Card Customer Agreement.
                        Additional iPhone Payments terms are here. ACMI is not
                        available for purchases made online at special
                        storefronts or on refurbished devices. The last
                        month&apos;s payment for each product will be the
                        product&apos;s purchase price, less all other payments
                        at the monthly payment amount. ACMI financing is subject
                        to change at any time for any reason, including but not
                        limited to, installment term lengths and eligible
                        products. See support.apple.com/en-us/HT211204 for
                        information about upcoming changes to ACMI financing.
                    </li>
                    <li>
                        The display has rounded corners that follow a beautiful
                        curved design, and these corners are within a standard
                        rectangle. When measured as a standard rectangular
                        shape, the screen is 5.42 inches (iPhone 13 mini, iPhone
                        12 mini), 5.85 inches (iPhone 11 Pro, iPhone XS, iPhone
                        X), 6.06 inches (iPhone 14, iPhone 13 Pro, iPhone 13,
                        iPhone 12 Pro, iPhone 12, iPhone 11, iPhone XR), 6.12
                        inches (iPhone 14 Pro), 6.46 inches (iPhone 11 Pro Max,
                        iPhone XS Max), 6.68 inches (iPhone 14 Plus, iPhone 13
                        Pro Max, iPhone 12 Pro Max), or 6.69 inches (iPhone 14
                        Pro Max) diagonally. Actual viewable area is less.
                    </li>
                </ol>
                <ul className="ul-2">
                    <li>
                        <div
                            className="ul-2-top-flex-group"
                            onClick={() => handleDropdownChange(1)}
                        >
                            <p>Shop and Learn</p>
                            {dropdowns[1] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    -
                                </motion.div>
                            )}
                            {!dropdowns[1] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    +
                                </motion.div>
                            )}
                        </div>
                        {dropdowns[1] && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="ul-2-bottom-flex-group"
                            >
                                <p>hello</p>
                                <p>world</p>
                                <p>hello</p>
                                <p>world</p>
                            </motion.div>
                        )}
                    </li>
                    <li>
                        <div
                            className="ul-2-top-flex-group"
                            onClick={() => handleDropdownChange(2)}
                        >
                            <p>Apple Wallet</p>
                            {dropdowns[2] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    -
                                </motion.div>
                            )}
                            {!dropdowns[2] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    +
                                </motion.div>
                            )}
                        </div>
                        {dropdowns[2] && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="ul-2-bottom-flex-group"
                            >
                                <p>hello</p>
                                <p>world</p>
                                <p>hello</p>
                                <p>world</p>
                            </motion.div>
                        )}
                    </li>
                    <li>
                        <div
                            className="ul-2-top-flex-group"
                            onClick={() => handleDropdownChange(3)}
                        >
                            <p>Account</p>
                            {dropdowns[3] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    -
                                </motion.div>
                            )}
                            {!dropdowns[3] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    +
                                </motion.div>
                            )}
                        </div>
                        {dropdowns[3] && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="ul-2-bottom-flex-group"
                            >
                                <p>hello</p>
                                <p>world</p>
                                <p>hello</p>
                                <p>world</p>
                                <p>aye</p>
                            </motion.div>
                        )}
                    </li>
                    <li>
                        <p>Entertainment</p>
                        <p>+</p>
                    </li>
                    <li>
                        <p>Apple Store</p>
                        <p>+</p>
                    </li>
                    <li>
                        <p>For Business</p>
                        <p>+</p>
                    </li>
                    <li>
                        <p>For Education</p>
                        <p>+</p>
                    </li>
                    <li>
                        <p>For Healthcare</p>
                        <p>+</p>
                    </li>
                    <li>
                        <p>For Government</p>
                        <p>+</p>
                    </li>
                    <li>
                        <p>Apple Values</p>
                        <p>+</p>
                    </li>
                    <li>
                        <p>About Apple</p>
                        <p>+</p>
                    </li>
                </ul>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}
                >
                    <p>
                        More ways to shop:{" "}
                        <a href="" target="_blank">
                            Find an Apple Store
                        </a>{" "}
                        or{" "}
                        <a href="" target="_blank">
                            other retailer
                        </a>{" "}
                        near you.
                    </p>
                    <p>Or call 1-800-MY-APPLE.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
