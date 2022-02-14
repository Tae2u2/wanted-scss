function ModalBox({ closeModal }) {
  const handleClose = () => {
    closeModal(false);
  };

  return (
    <div onClick={handleClose}>
      <div>
        <button onClick={handleClose}>X</button>
        Modal
        <div>
          <button onClick={handleClose}>cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ModalBox;
