import { useEffect, useState } from "react";
import AddModal from "../../components/AddModal/AddModal";
import TypingEffect from "../../components/TypingEffect/TypingEffect";
import Social from "../../components/Social/Social";
import facebook from "../../images/links/facebook.png";
import linkedin from "../../images/links/linkedin.png";
import gitchub from "../../images/links/github.png";
import css from "./Contacts.module.css";

const text = `Get in touch &

If you wanna get in touch, talk to me about a project collaboration or just say hi,
fill up the form below or send an email to                              and 
~let's talk..`;

export default function Contacts() {
  const [show, setShow] = useState(false);
  const [addModalIsopen, setAddModalIsopen] = useState(false);

  const openAddModal = () => {
    setAddModalIsopen(true);
  };
  const closeAddModal = () => {
    setAddModalIsopen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={css.wrapper}>
      <TypingEffect text={text} />
      {show && (
        <div className={`${css.email} ${css.fadeIn}`}>
          <a href="mailto:Nikitinigor0907@gmail.com">
            Nikitinigor0907@gmail.com
          </a>
        </div>
      )}
      {show && (
        <div className={`${css.socials} ${css.fadeIn}`}>
          <Social>
            <a
              href="https://www.facebook.com/igor.nikitin.73113/"
              className={css.link}
            >
              <img src={facebook} alt="facebook" />
              Facebook
            </a>
          </Social>
          <Social>
            <a
              href="https://www.linkedin.com/in/nikitin-ihor/"
              className={css.link}
            >
              <img src={linkedin} alt="linkedin" />
              Linkedin
            </a>
          </Social>
          <Social>
            <a href="https://github.com/NikitinIhor" className={css.link}>
              <div className={css.github}>
                <img src={gitchub} alt="github" width={35} height={35} />
                Github
              </div>
            </a>
          </Social>
        </div>
      )}
      <button onClick={openAddModal} className={css.btn}>
        ~let's talk
      </button>
      <AddModal closeAddModal={closeAddModal} addModalIsopen={addModalIsopen} />
    </div>
  );
}
