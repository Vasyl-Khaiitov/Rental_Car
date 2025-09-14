import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import Logo from "../../Logo/Logo";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.logo}>
        <Logo />
      </NavLink>

      <div className={css.links}>
        <NavLink to="/" className={buildLinkClass}>
          <p>Home</p>
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          <p>Catalog</p>
        </NavLink>
      </div>
    </nav>
  );
}
