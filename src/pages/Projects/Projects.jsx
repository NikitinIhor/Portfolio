import { NavLink, Outlet } from "react-router-dom";
import css from "./Projects.module.css";

import archive from "../../images/category/archive.png";
import back from "../../images/category/back.png";
import front from "../../images/category/front.png";

export default function Projects() {
  return (
    <div className={css.projects}>
      <div className="container">
        <nav className={css.nav}>
          <NavLink className={css.link} to="frontend">
            <img src={front} alt="image of frontend" />
            Frontend <span>best works</span>
          </NavLink>

          <NavLink className={css.link} to="backend">
            <img src={back} alt="image of backend" />
            Backend <span>best works</span>
          </NavLink>

          <NavLink className={css.link} to="all">
            <img src={archive} alt="image of archive" />
            All works <span>archive</span>
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
