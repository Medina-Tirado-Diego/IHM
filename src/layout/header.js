import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Mis Perros
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
