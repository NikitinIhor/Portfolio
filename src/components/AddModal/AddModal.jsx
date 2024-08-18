import Modal from "react-modal";
Modal.setAppElement("#root");
import FeedbackForm from "../FeedbackForm/FeedbackForm";

export default function AddModal({ addModalIsopen, closeAddModal }) {
  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 8,
      color: "white",
      width: "400px",
      height: "400px",
      boxShadow: "8px 8px 8px black",
    },
  };

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
