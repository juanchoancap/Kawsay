import { Navbar as NavbarBootstrap } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import style from "../../CSS/App.css"

const NavBar = () => {
  const { push } = useHistory();
  return (
    <div>
      <NavbarBootstrap bg="white" variant="success">
        <NavbarBootstrap.Brand className=" font-weight-bold mx-5 text-muted">
          Kawsai
        </NavbarBootstrap.Brand>
      </NavbarBootstrap>
      <div className = "ponele">
        <ul>
          <li>
            <Link to="/"><h5 className={style.color}>Calculadora</h5></Link>
          </li>
          <li>
            <Link to="/consejos"><h5 className={style.color}>Mejora tu impacto</h5></Link>
          </li>
          <li>
            <Link to="/planta"><h5 className={style.color}>Planta un arbol</h5></Link>
          </li>
          <li>
            <Link to="/newsletter"><h5 className={style.color}>Suscribete</h5></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
