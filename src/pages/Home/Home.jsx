import Cv from "../../components/Cv/Cv";
import Diploma from "../../components/Diploma/Diploma";
import TypingEffect from "../../components/TypingEffect/TypingEffect";
import css from "./Home.module.css";

const text = `Hello! I'm Nikitin Ihor &

I’m a Full-Stack Developer with a passion for
 creating dynamic and engaging web applications
 and sites. 

  Proficient in HTML, CSS, JavaScript, React, 
  Redux, Node.js, Express, and MongoDB,
  I enjoy turning ideas into intuitive, 
  high-performance user interfaces while also
  building reliable backend systems to support 
  them. My focus is on crafting seamless, 
  responsive user experiences and efficient, 
  scalable server-side solutions..`;

export default function Home() {
  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.main}>
          <TypingEffect text={text} />
          <div className={css.body}>
            <Diploma />
            <Cv />
          </div>
        </div>
      </div>
    </div>
  );
}
