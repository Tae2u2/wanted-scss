import { useState } from "react";
import ModalBox from "./Modalbox";
import "../Style/first.css";

function Openmodal() {
  const [openModalBox, setOpenModalBox] = useState(false);
  return (
    <div className="area">
      <button className="openModalBtn" onClick={() => setOpenModalBox(true)}>
        Open Modal
      </button>
      {openModalBox && <ModalBox closeModal={setOpenModalBox} />}
    </div>
  );
}

export default Openmodal;
