import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import { VscEye, VscEyeClosed } from "react-icons/vsc";
import css from "./Project.module.css";

export default function Project({
  data: {
    title,
    subtitle,
    skills,
    image,
    alt = "project image",
    description,
    url,
    github,
    isNew,
    year,
  },
}) {
  const [showSkills, setShowSkills] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={css.wrapper}>
      <a
        className={css.github}
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub /> <span>GitHub</span>
      </a>

      {isNew && <div className={css.newBadge}>New</div>}

      <h2 className={css.title}>- {title} -</h2>
      <a
        href={url}
        className={css.item}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={css.image} src={image} alt={alt} />
      </a>
      <p className={css.sub}>{subtitle}</p>

      <div
        className={css.skills}
        onClick={() => setShowSkills((prevState) => !prevState)}
      >
        <div className={css.menu}>
          <p>Skills I used</p>
          <span className={css.finger}>
            {showSkills ? <VscEyeClosed size="24px" /> : <VscEye size="24px" />}
          </span>
        </div>
      </div>
      {showSkills && (
        <div className={`${css.skills_body} ${showSkills ? css.active : ""}`}>
          {skills}
        </div>
      )}

      <div
        className={css.description}
        onClick={() => setShowDescription((prevState) => !prevState)}
      >
        <div className={css.menu}>
          <p className={css.span}>Description</p>
          <span className={css.finger}>
            {showDescription ? (
              <VscEyeClosed size="24px" />
            ) : (
              <VscEye size="24px" />
            )}
          </span>
        </div>
      </div>
      {showDescription && (
        <div
          className={`${css.description_body} ${
            showDescription ? css.active : ""
          }`}
        >
          {description}
        </div>
      )}

      <span className={css.year}>{year}</span>
    </div>
  );
}
