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
    isNew,
    year,
  },
}) {
  return (
    <div className={css.wrapper}>
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
