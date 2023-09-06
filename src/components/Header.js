import { NavLink } from "react-router-dom"
import "./styles.css"
import { useContext } from "react"
import { Cart } from "../Context";

const Header = () => {
    const { cart } = useContext(Cart);
    return (
        <div>
            <span className="header">Context API practice</span>
            <ul className="nav">
                <li><NavLink to="/">Home Page</NavLink></li>
                <li><NavLink to="/cart">{(cart.length && `Cart (${cart.length})`) || "Cart"}</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
