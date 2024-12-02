import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Project from "../../components/Project/Project";
import { DATA } from "../../data";

import css from "./Projects.module.css";

export default function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading)
    return (
      <div className={css.loader}>
        <Loader />
      </div>
    );

  return (
    <div className="container">
      <ul className={css.list}>
        {DATA.map((item) => (
          <li className={css.item} key={item.id}>
            <Project data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
