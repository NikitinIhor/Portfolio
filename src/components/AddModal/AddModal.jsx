import { useEffect, useState } from "react";
import Modal from "react-modal";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
Modal.setAppElement("#root");

export default function AddModal({ addModalIsopen, closeAddModal }) {
  const baseStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 8,
      color: "white",
      height: "400px",
      boxShadow: "8px 8px 8px black",
    },
  };

  const responsiveStyles = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      return {
        width: "300px",
      };
    } else {
      return {
        width: "500px",
      };
    }
  };

  const [customStyles, setCustomStyles] = useState({
    content: { ...baseStyles.content, ...responsiveStyles() },
  });

  useEffect(() => {
    const madalWidth = () => {
      setCustomStyles({
        content: { ...baseStyles.content, ...responsiveStyles() },
      });
    };

    window.addEventListener("resize", madalWidth);

    madalWidth();

    return () => window.removeEventListener("resize", madalWidth);
  }, []);

  return (
    <Modal
      style={customStyles}
      isOpen={addModalIsopen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <FeedbackForm
        onRequestClose={closeAddModal}
        closeAddModal={closeAddModal}
      />
    </Modal>
  );
}
