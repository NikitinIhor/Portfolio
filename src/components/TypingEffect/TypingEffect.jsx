import { useEffect, useState } from "react";
import s from "./TypingEffect.module.css";

export default function TypingEffect({ text }) {
  const [result, setResult] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setResult((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 10);

      return () => clearInterval(interval);
    }
  }, [index, text]);

  const [title, ...allText] = result.split("&");
  const newText = allText.join("&");

  return (
    <div className={s.wrapper}>
      <pre className={s.title}>
        {title} {index < text.indexOf("&") ? "|" : ""}
      </pre>
      <pre className={s.text}>
        {newText}
        {index < text.length ? "|" : ""}
      </pre>
    </div>
  );
}
