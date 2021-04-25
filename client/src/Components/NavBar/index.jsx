import { Navbar as NavbarBootstrap } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import style from "../../CSS/App.css"

const NavBar = () => {
  const { push } = useHistory();
  return (
    <div>
      <NavbarBootstrap bg="white">
        <NavbarBootstrap.Brand className="font-weight-bold mx-5 text-muted">
          Kawsai
        </NavbarBootstrap.Brand>
      </NavbarBootstrap>
      <div className = "navList">
        <ul>
          <li>
            <Link to="/" className="colorNav text-decoration-none"><h5>Calculadora</h5></Link>
          </li>
          <li>
            <Link to="/consejos" className="colorNav text-decoration-none"><h5>Mejora tu impacto</h5></Link>
          </li>
          <li>
            <Link to="/planta" className="colorNav text-decoration-none"><h5>Planta un arbol</h5></Link>
          </li>
          <li>
            <Link to="/newsletter" className="colorNav text-decoration-none"><h5>Suscríbete</h5></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
