import { Navbar as NavbarBootstrap } from "react-bootstrap";

const NavBar = () => {
    return (
        <>
        <NavbarBootstrap bg="info" variant="success">

        <NavbarBootstrap.Brand className=" font-weight-bold mx-5 text-muted">
            Kawsai
            </NavbarBootstrap.Brand>
        </NavbarBootstrap>
        </>
    );
};
export default NavBar;