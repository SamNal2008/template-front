import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav className="nav-bar">
        <Link to='/home'>Accueil</Link>
      </nav>
    </header>
  )
}

export default Header;