import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/cv">CV</NavLink>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/projects">Projekter</NavLink>
    </nav>
  );
}
