import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import Logo from "../../Logo/Logo";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <NavLink to="/" className={buildLinkClass}>
        <h2>Home</h2>
      </NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>
        <h2>Catalog</h2>
      </NavLink>
    </nav>
  );
}
