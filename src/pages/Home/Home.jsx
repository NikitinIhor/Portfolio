import Cv from "../../components/Cv/Cv";
import Diploma from "../../components/Diploma/Diploma";
import TypingEffect from "../../components/TypingEffect/TypingEffect";
import css from "./Home.module.css";

const text = `Hello! I'm Nikitin Ihor &

I’m a Full-Stack Developer passionate about 
building dynamic and engaging web applications. 
With expertise in HTML, CSS, JavaScript, React,
Next.js,Redux,Tailwind CSS, Node.js, Express, 
and MongoDB, I specialize in crafting intuitive 
user interfaces and developing scalable backend
systems.

I love turning ideas into high-performance, 
responsive experiences, ensuring both seamless 
front-end interactions
and efficient server-side solutions.`;

export default function Home() {
  return (
    <div className={css.wrapper}>
      <div className="container">
        <TypingEffect text={text} />
        <div className={css.body}>
          <Diploma />
          <Cv />
        </div>
      </div>
    </div>
  );
}
