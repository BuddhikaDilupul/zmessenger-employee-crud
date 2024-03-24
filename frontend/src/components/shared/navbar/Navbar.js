import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const mainNav = [
    { name: "Home", path: "/employee/list" },
    { name: "Add User", path: "/employee/add" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
  ];
  return (
    <header>
      <h3>Z-LOGO</h3>
      <nav ref={navRef}>
        {mainNav.map((data, id) => {
          return (
            <div key={data.name} onClick={() => navigate(`${data.path}`)}>
              {data.name}
            </div>
          );
        })}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
