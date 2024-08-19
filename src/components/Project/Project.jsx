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
  },
}) {
  return (
    <div className={css.wrapper}>
      <a href={url} className={css.item} target="_blank">
        <h2 className={css.title}>- {title} -</h2>
        <img className={css.image} src={image} alt={alt} />
        <p className={css.sub}>{subtitle}</p>
        <p className={css.skills}>
          <span>Skills i used:</span> ({skills})
        </p>
        <p className={css.description}>
          <span>Description:</span> {description}
        </p>
      </a>
    </div>
  );
}
