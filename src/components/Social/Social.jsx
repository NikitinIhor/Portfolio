import css from "./Social.module.css";

export default function Social({ children }) {
  return <div className={css.social}>{children}</div>;
}
