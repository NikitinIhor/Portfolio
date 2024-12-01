import clsx from "clsx";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import {
  PiArrowBendDownLeftDuotone,
  PiArrowBendDownRightDuotone,
} from "react-icons/pi";
import image from "../../images/icons8-cv-64.png";
import css from "../Diploma/Diploma.module.css";

export default function Cv() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10);

    return () => clearTimeout(timer);
  });

  const handleClick = (e) => {
    e.preventDefault();
    const url = e.currentTarget.href;

    setTimeout(() => {
      window.open(url, "_blank");
    }, 50);
  };

  return (
    <div className={clsx(css.cv, { [css.show]: show, [css.unvisible]: !show })}>
      <h2 className={css.title}>View my CV</h2>
      <div className={css.arrows}>
        <IconContext.Provider value={{ size: 40, color: "rgb(206, 206, 206)" }}>
          <PiArrowBendDownRightDuotone />
        </IconContext.Provider>
        <IconContext.Provider value={{ size: 40, color: "rgb(206, 206, 206)" }}>
          <PiArrowBendDownLeftDuotone />
        </IconContext.Provider>
      </div>
      <a
        onClick={handleClick}
        className={css.image}
        href="https://drive.google.com/file/d/1IR0bq9iPNein4YUDrEhNpxJTThttWp68/view?usp=sharing"
        target="_blank"
      >
        <img src={image} alt="my CV" />
      </a>
    </div>
  );
}
