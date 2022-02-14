import { useState } from "react";
import ModalBox from "./Modalbox";

function Openmodal() {
  const [openModalBox, setOpenModalBox] = useState(false);
  return (
    <div>
      <h1>버튼을 눌러주세요!</h1>
      <button className="openModalBtn" onClick={() => setOpenModalBox(true)}>
        Here!
      </button>
      {openModalBox && <ModalBox closeModal={setOpenModalBox} />}
    </div>
  );
}

export default Openmodal;
