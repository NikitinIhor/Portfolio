import { NavLink, Outlet } from "react-router-dom";
import css from "./Projects.module.css";

import { useState } from "react";
import archive from "../../images/category/archive.png";
import back from "../../images/category/back.png";
import front from "../../images/category/front.png";

export default function Projects() {
  const [showTitle, setShowTitle] = useState(true);

  const handleClick = () => {
    setShowTitle(false);
  };

  return (
    <div className={css.projects}>
      <div className="container">
        <nav className={css.nav}>
          <NavLink onClick={handleClick} className={css.link} to="frontend">
            <img src={front} alt="image of frontend" />
            Frontend <span>best works</span>
          </NavLink>

          <NavLink onClick={handleClick} className={css.link} to="backend">
            <img src={back} alt="image of backend" />
            Backend <span>best works</span>
          </NavLink>

          <NavLink onClick={handleClick} className={css.link} to="all">
            <img src={archive} alt="image of archive" />
            All works <span>archive</span>
          </NavLink>
        </nav>
        {showTitle && (
          <h2 className={css.title}>
            <span>Welcome to my portfolio page!</span> Here, you can explore my
            projects built with React, Node.js, Next.js, Vanilla JavaScript,
            creative animations, and responsive design. I have worked on both
            command-based works and personal projects, each reflecting my
            passion for coding, problem-solving, and delivering user-friendly
            experiences. <br />
            <br />
            At the top, you'll find three tabs to guide you through my
            work—whether you're interested in frontend, backend, or a complete
            archive of my projects. Enjoy browsing
          </h2>
        )}
        <Outlet />
      </div>
    </div>
  );
}
