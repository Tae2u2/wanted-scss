import "./Toggle.css";
import style from "./style.module.css";
import { useState } from "react";

function Toggle() {
  const [handleActive, setHandleActive] = useState(true);
  const moveToggle = () => {
    if (handleActive) {
      setHandleActive(false);
    } else {
      setHandleActive(true);
    }
  };
  return (
    <div className={style.area}>
      <button onClick={moveToggle}>
        <div className="outbox">
          <div
            className={handleActive ? "verticalbox" : "verticalbox moving"}
          ></div>
        </div>
        <div
          className={handleActive ? "inner-circle" : "inner-circle active"}
        ></div>
      </button>
    </div>
  );
}

export default Toggle;
