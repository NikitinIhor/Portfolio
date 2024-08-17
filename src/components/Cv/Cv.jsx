import { IconContext } from "react-icons";
import { PiArrowBendDownLeftDuotone } from "react-icons/pi";
import { PiArrowBendDownRightDuotone } from "react-icons/pi";
import { useEffect, useState } from "react";
import image from "../../images/icons8-cv-64.png";
import clsx from "clsx";
import css from "./Cv.module.css";

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
        <IconContext.Provider value={{ size: 50, color: "rgb(206, 206, 206)" }}>
          <PiArrowBendDownRightDuotone />
        </IconContext.Provider>
        <IconContext.Provider value={{ size: 50, color: "rgb(206, 206, 206)" }}>
          <PiArrowBendDownLeftDuotone />
        </IconContext.Provider>
      </div>
      <a
        onClick={handleClick}
        className={css.image}
        href="https://drive.google.com/file/d/1xIbSs6l0AQJhL0iMcdxa4AF-dcuUJvUr/view?usp=sharing"
        target="_blank"
      >
        <img src={image} alt="my CV" width={100} height={100} />
      </a>
    </div>
  );
}
