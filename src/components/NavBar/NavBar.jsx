import CarWidget from "../CartWidget/CartWidget";
import { Link } from "react-router";

function NavBar () {
    return (
        <nav>
            <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/9524/9524624.png" 
                    alt="Home" 
                    style={{width: '35px', height: '35px'}} /></Link>
            <ul>
                <Link to="/category/Running">Running</Link>
                <Link to="/category/Lifestyle">Lifestyle</Link>
                <Link to="/category/Casual">Casual</Link>
                <Link to="/detalle">Detalle</Link>
            </ul>
            <CarWidget />
        </nav>
        
    )
}
export default NavBar;