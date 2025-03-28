import { useEffect, useState } from "react";

import Loader from "../../components/Loader/Loader";
import Project from "../../components/Project/Project";
import { DATA } from "../../data";
import css from "../AllProjects/AllProjects.module.css";

const Backend = () => {
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
        Welcome to my best <span>backend projects</span> ! On this page, you can
        explore some of my most challenging backend work, where I focus on
        building robust, scalable, and secure server-side solutions. Using
        technologies such as Node.js, Express, MongoDB, and APIs, I develop
        applications that handle large amounts of data efficiently and provide
        seamless integration with frontend interfaces. Dive into these projects
        to see how I handle server-side logic, databases, and security.
      </h2>
      <ul className={css.list}>
        {DATA.filter((item) => item.filter === "node").map((item) => (
          <li className={css.item} key={item.id}>
            <Project data={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Backend;
