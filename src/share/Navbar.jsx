import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="flex justify-between ">
      <h1>Logo</h1>
      <ul className="flex gap-3">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
        <li>
          <Link>Dashboard</Link>
        </li>
      </ul>
      <div>
        {user ? (
          <Link onClick={handleLogout} to={"/login"}>
            Log Out
          </Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
