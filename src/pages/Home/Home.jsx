import Cv from "../../components/Cv/Cv";
import TypingEffect from "../../components/TypingEffect/TypingEffect";
import css from "./Home.module.css";

const text = `Hello! I'm Nikitin Ihor &

I’m a Frontend Developer with a passion for creating
 dynamic and engaging web applications and sites. 

  Proficient in HTML, CSS, JavaScript, React, and Redux, 
  I enjoy turning ideas into intuitive, high-performance 
  user interfaces.`;

export default function Home() {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <TypingEffect text={text} />
        <Cv />
      </div>
    </div>
  );
}
