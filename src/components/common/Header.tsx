import { Link } from "react-router-dom";
import '../../styles/components/_Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <Link className="link" to='/home'>Accueil</Link>
      </nav>
    </header>
  )
}

export default Header;