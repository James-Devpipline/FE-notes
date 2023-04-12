import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <NavLink exact to="/">
        Home
      </NavLink>

      <NavLink exact to="/products">
        Products
      </NavLink>

      <NavLink to="/admin">Admin</NavLink>
      <button onClick={() => props.history?.push("/")}>Logout</button>
    </div>
  );
}
