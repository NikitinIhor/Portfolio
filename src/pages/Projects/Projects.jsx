import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import Loader from "../../components/Loader/Loader";
import Project from "../../components/Project/Project";
import { DATA } from "../../data";
import css from "./Projects.module.css";

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [filterValue, setFilterValue] = useState("all projects");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);

  if (loading)
    return (
      <div className={css.loader}>
        <Loader />
      </div>
    );

  const handleChangeFilter = (filter) => {
    setLoading(true);
    setFilterValue(filter);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const filtredData = DATA.filter((projects) => {
    switch (filterValue) {
      case "react":
        return projects.filter === "react";
      case "ts":
        return projects.filter === "ts";
      case "vanilla":
        return projects.filter === "vanilla";
      case "personal":
        return projects.subtitle === "Personal project";
      case "command":
        return projects.subtitle === "Command project";
      case "new":
        return projects.isNew;
      case "2022":
        return projects.year === "2022";
      case "2023":
        return projects.year === "2023";
      case "2024":
        return projects.year === "2024";
      case "2025":
        return projects.year === "2025";
      default:
        return true;
    }
  });

  return (
    <div className="container">
      <Filter
        handleChangeFilter={handleChangeFilter}
        filterValue={filterValue}
      />
      <ul className={css.list}>
        {filtredData.map((item) => (
          <li className={css.item} key={item.id}>
            <Project data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
