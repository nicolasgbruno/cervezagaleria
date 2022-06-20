import logo from "../../assets/logo.png";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "./NavBar.css"

const NavBar = () => {
    return (
        <header className="menuHeader">
            <img src={logo} alt="" />
            <nav>
                <a href="#">Estilo IPA</a>
                <a href="#">Estilo APA</a>
                <a href="#">Estilo NeIPA</a>
            </nav>
            <ShoppingCartCheckoutIcon className="carrito" color="primary" sx={{ fontSize: 40 }}/>
        </header>
    )
}

export default NavBar