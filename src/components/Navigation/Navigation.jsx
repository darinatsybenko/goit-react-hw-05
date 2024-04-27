import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.navLink, { [css.active]: isActive })
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(css.navLink, { [css.active]: isActive })
            }
            to="movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
