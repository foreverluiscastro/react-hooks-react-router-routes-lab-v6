import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {

  const routes = [
    {
      route: "/",
      title: "Home"
    },
    {
      route: "/directors",
      title: "Directors"
    },
    {
      route: "/actors",
      title: "Actors"
    },
  ]

  const navList = routes.map((obj) => <NavLink key={obj.title} to={obj.route}>{obj.title}</NavLink>)

  return (
    <nav className="navbar">
      {navList}
    </nav>
    );
};

export default NavBar;
