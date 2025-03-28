import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import Loader from "../../components/Loader/Loader";
import Project from "../../components/Project/Project";
import { DATA } from "../../data";
import css from "./AllProjects.module.css";

export default function AllProjects() {
  const [loading, setLoading] = useState(true);
  const [filterValue, setFilterValue] = useState("all projects");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

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
      case "next":
        return projects.filter === "next";
      case "ts":
        return projects.filter === "ts";
      case "vanilla":
        return projects.filter === "vanilla";
      case "personal":
        return projects.subtitle === "Personal project";
      case "command":
        return projects.subtitle === "Command project";
      case "node":
        return projects.filter === "node";
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
    <>
      <h2 className={css.title}>
        Welcome to my <span>archive</span> ! This page features all the projects
        I’ve worked on, showcasing both frontend and backend applications. From
        small personal projects to larger collaborative ones, browse through to
        explore the diversity of technologies and frameworks I've used,
        including projects that may not fit in the 'best of' categories but
        still highlight my growth as a developer." Filter Projects: "Use the
        filter to explore projects by category, technology (React, Node.js,
        Next.js), type (Personal, Command), or year. Easily find works that
        match your interests!
      </h2>
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
    </>
  );
}
