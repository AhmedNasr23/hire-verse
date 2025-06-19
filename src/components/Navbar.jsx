import { FaUser, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        &lt;// <span>HIREVERSE</span> //&gt;
      </div>
      <div className="navbar-icons">
        <FaPlusCircle className="nav-icon" />

        <Link to={'/portal'}>
          <div className="nav-avatar">
            <FaUser />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
