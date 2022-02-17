import "../Style/first.css";
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
    <div className="area">
      <button className="toggleBtn" onClick={moveToggle}>
        <div className="outbox">
          <div
            className={handleActive ? "verticalbox" : "verticalbox moving"}
          ></div>
        </div>
        <div
          className={handleActive ? "inner-circle" : "inner-circle active"}
        ></div>
      </button>
      Toggle Switch {handleActive ? "OFF" : "ON"}
    </div>
  );
}

export default Toggle;
