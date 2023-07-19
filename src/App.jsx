import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from "./AnimatedRoutes"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function App() {
    return (
        <Router basename="/shopping-cart">
            <ScrollToTop />
            <AnimatedRoutes />
        </Router>
    )
}

export default App
