import { BrowserRouter as Router } from "react-router-dom"
import "./css/App.css"
import AnimatedRoutes from "./AnimatedRoutes"
import ScrollToTop from "./ScrollToTop"

function App() {
    return (
        <Router basename="/shopping-cart">
            <ScrollToTop />
            <AnimatedRoutes/>
        </Router>
    )
}

export default App
