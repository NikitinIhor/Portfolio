import { useEffect, useState } from "react";

import Loader from "../../components/Loader/Loader";
import Project from "../../components/Project/Project";
import { DATA } from "../../data";
import css from "../AllProjects/AllProjects.module.css";

const Frontend = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <h2 className={css.title}>
        Welcome to my best <span>frontend projects</span> ! Here, you'll find a
        selection of my most impressive and polished frontend work. These
        projects showcase my skills in building responsive, user-friendly, and
        visually appealing websites and web applications using modern web
        technologies like React, JavaScript (ES6+), CSS3, and more. Explore
        these projects to see how I create seamless user experiences with an
        emphasis on design, performance, and usability.
      </h2>
      <ul className={css.list}>
        {DATA.filter((item) => item.top).map((item) => (
          <li className={css.item} key={item.id}>
            <Project data={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Frontend;
