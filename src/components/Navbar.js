import CartLogo from "./CartLogo.js";
import ListContainer from "./ListContainer";
import "../styles/style.css"

const NavBar = () => {
    return (
        <>
        <div className="nav Navbar">
        <CartLogo />
        <ListContainer />
        </div>
        </>
    )
}

export default NavBar;