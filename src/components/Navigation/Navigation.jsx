import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  const isActive = ({ isActive }) => {
    return clsx(s.link, isActive && s.isActive);
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Works" },
    { to: "/contacts", label: "Contacts" },
  ];

  return (
    <header className={s.header}>
      <div className="container">
        <nav>
          <ul className={s.list}>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink className={isActive} to={to}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
