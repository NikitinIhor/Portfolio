import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import clsx from "clsx";
import css from "./Footer.module.css";

export default function Footer() {
  const [icons, setIcons] = useState({
    html: false,
    css: false,
    js: false,
    react: false,
    redux: false,
    ts: false,
    github: false,
  });

  useEffect(() => {
    const timers = [
      setTimeout(() => setIcons((prev) => ({ ...prev, html: true })), 500),
      setTimeout(() => setIcons((prev) => ({ ...prev, css: true })), 800),
      setTimeout(() => setIcons((prev) => ({ ...prev, js: true })), 1100),
      setTimeout(() => setIcons((prev) => ({ ...prev, react: true })), 1400),
      setTimeout(() => setIcons((prev) => ({ ...prev, redux: true })), 1700),
      setTimeout(() => setIcons((prev) => ({ ...prev, ts: true })), 2000),
      setTimeout(() => setIcons((prev) => ({ ...prev, github: true })), 2300),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className={css.footer}>
      <IconContext.Provider value={{ size: 30, color: "rgb(206, 206, 206)" }}>
        {icons && (
          <>
            <div
              className={clsx(css.icon, {
                [css.show]: icons.html,
                [css.hidden]: !icons.html,
              })}
            >
              <FaHtml5 /> HTML
            </div>
            <div
              className={clsx(css.icon, {
                [css.show]: icons.css,
                [css.hidden]: !icons.css,
              })}
            >
              <FaCss3Alt /> CSS
            </div>
            <div
              className={clsx(css.icon, {
                [css.show]: icons.js,
                [css.hidden]: !icons.js,
              })}
            >
              <FaJs /> JS
            </div>
            <div
              className={clsx(css.icon, {
                [css.show]: icons.react,
                [css.hidden]: !icons.react,
              })}
            >
              <FaReact /> REACT
            </div>
            <div
              className={clsx(css.icon, {
                [css.show]: icons.redux,
                [css.hidden]: !icons.redux,
              })}
            >
              <SiRedux /> REDUX
            </div>
            <div
              className={clsx(css.icon, {
                [css.show]: icons.ts,
                [css.hidden]: !icons.ts,
              })}
            >
              <SiTypescript /> TS
            </div>
            <div
              className={clsx(css.icon, {
                [css.show]: icons.github,
                [css.hidden]: !icons.github,
              })}
            >
              <FaGithub /> GITHUB
            </div>
          </>
        )}
      </IconContext.Provider>
    </div>
  );
}
