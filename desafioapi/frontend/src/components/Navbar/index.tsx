import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="bg-primary nav-container">
      <div>
        <Link to="/">
          <h4>Github API</h4>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
