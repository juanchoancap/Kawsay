import { Navbar as NavbarBootstrap } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavbarBootstrap bg="info" variant="success">
        <NavbarBootstrap.Brand className=" font-weight-bold mx-5 text-muted">
          Kawsai
        </NavbarBootstrap.Brand>
      </NavbarBootstrap>
      <div>
        <ul>
          <li>
            <Link to="/">Calculadora</Link>
          </li>
          <li>
            <Link to="/consejos">Mejora tu impacto</Link>
          </li>
        </ul>
      </div>
      <li>
        <Link to="/planta">Planta un Arbol</Link>
      </li>
      <li>
        <Link to="/newsletter">Suscribete</Link>
      </li>
    </div>
  );
};
export default NavBar;
