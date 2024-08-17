import { useState, useEffect } from "react";
import css from "./TypingEffect.module.css";

export default function TypingEffect({ text }) {
  const [result, setResult] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setResult((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 40);

      return () => clearInterval(interval);
    }
  }, [index, text]);

  const [title, ...allText] = result.split("&");
  const newText = allText.join("&");

  return (
    <div className={css.wrapper}>
      <pre className={css.title}>
        {title} {index < text.indexOf("&") ? "|" : ""}
      </pre>
      <pre className={css.text}>
        {newText}
        {index < text.length ? "|" : ""}
      </pre>
    </div>
  );
}
