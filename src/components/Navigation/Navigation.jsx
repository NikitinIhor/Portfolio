import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <header className={css.header}>
      <div className="container">
        <nav>
          <ul className={css.list}>
            <li>
              <NavLink className={isActive} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={isActive} to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className={isActive} to="/contacts">
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
