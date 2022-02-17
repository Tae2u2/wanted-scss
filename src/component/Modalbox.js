import "../Style/first.css";

function ModalBox({ closeModal }) {
  const handleClose = () => {
    closeModal(false);
  };

  return (
    <div className="big-box" onClick={handleClose}>
      <div className="middle-box">
        <button className="closeModalBtn" onClick={handleClose}>
          X
        </button>
        HELLO MODAL!
      </div>
    </div>
  );
}

export default ModalBox;
