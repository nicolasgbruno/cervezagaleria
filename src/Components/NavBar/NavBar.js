import logo from "../../assets/images/logo.png";
import "./NavBar.css"
import CartWidget from "./CartWidget";

const menuItems = [
    {
        id: 1,
        label: "Indian Pale Ale"
    },
    {
        id: 2,
        label: "American Pale Ale"
    },
    {
        id: 3,
        label: "New England IPA"
    }
]

const NavBar = () => {
    return (
        <nav>
            <img className="logo" src={logo} alt="" />
            <div className='navCategorias'>
                {menuItems.map((item) => (
                    <a href="#/" className='navItem' key={item.id}>{item.label}</a>
                ))}
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar