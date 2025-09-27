import clsx from "clsx";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import {
  PiArrowBendDownLeftDuotone,
  PiArrowBendDownRightDuotone,
} from "react-icons/pi";
import image from "../../images/Certificate.png";
import s from "./Diploma.module.css";

export default function Diploma() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href, "_blank");
  };

  return (
    <div className={clsx(s.cv, { [s.show]: show })}>
      <h2 className={s.title}>Certificate</h2>
      <div className={s.arrows}>
        <IconContext.Provider value={{ size: 20, color: "rgb(206, 206, 206)" }}>
          <PiArrowBendDownRightDuotone />
          <PiArrowBendDownLeftDuotone />
        </IconContext.Provider>
      </div>
      <a
        onClick={handleClick}
        className={s.image}
        href="https://drive.google.com/file/d/1gBaTxEuENfxv3uBDCPmM6gpUvLDAiA4k/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image} alt="Certificate" />
      </a>
    </div>
  );
}
