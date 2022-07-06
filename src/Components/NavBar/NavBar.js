import logo from "../../assets/images/logo.png";
import "./NavBar.css"
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"

const categorias = [
    {
        id: 1,
        label: "IPA",
        path: "/category/ipa"
    },
    {
        id: 2,
        label: "APA",
        path: "/category/apa"
    },
    {
        id: 3,
        label: "NEIPA",
        path: "/category/neipa"
    }
]

const NavBar = () => {
    return (
        <nav>
             <img className="logo" src={logo} alt="" />
            <div className='navCategorias'>
                {categorias.map((item) => (
                    <Link to={item.path} className='navItem' key={item.id}>{item.label}</Link>
                ))}
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar