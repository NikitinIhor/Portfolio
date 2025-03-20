import { FaGithub } from "react-icons/fa";
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
    inProcess,
  },
}) {
  return (
    <div className={css.wrapper}>
      {inProcess && (
        <div className={css.inProcess}>
          <p> Application in Development</p>
        </div>
      )}
      <a className={css.github} href={github} target="_blank">
        <FaGithub /> <span>GitHub</span>
      </a>
      {isNew && <div className={css.newBadge}>New</div>}
      <a href={url} className={css.item} target="_blank">
        <h2 className={css.title}>- {title} -</h2>
        <img className={css.image} src={image} alt={alt} />
        <p className={css.sub}>{subtitle}</p>
        <p className={css.skills}>
          <span>Skills i used:</span> ({skills})
        </p>
        <p className={css.description}>
          <span className={css.span}>Description:</span> {description}
        </p>
        <span className={css.year}>{year}</span>
      </a>
    </div>
  );
}
