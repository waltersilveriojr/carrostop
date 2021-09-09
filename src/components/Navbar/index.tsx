import "./styles.css";
import "bootstrap/js/src/collapse.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-primary main-nave">
      <div className="container-fluid">
        <div className="nav-logo-text">
          <h1>Carros Top</h1>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carcatalog-navbar"
          aria-controls="carcatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="carcatalog-navbar">
          <ul className="navbar-nav offset-md-4 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" activeClassName="active" exact>
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
