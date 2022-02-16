import { useState } from "react";
import style from "./style.module.css";

function ClickToEdit() {
  const [username, setUsername] = useState("김코딩");
  const [userage, setUserage] = useState("20");
  const [changeR, setChangeR] = useState(true);

  const onChange = (whatBox, event) => {
    if (whatBox === "name") {
      setUsername(event.target.value);
    } else if (whatBox === "age") {
      setUserage(event.target.value);
    }
  };

  const removeR = () => {
    setChangeR(false);
  };
  return (
    <div className={style.area}>
      <label htmlFor="name">이름</label>
      <input
        type="text"
        onChange={(event) => onChange("name", event)}
        onClick={removeR}
        value={username}
        readOnly={changeR}
      />
      <label htmlFor="age">나이</label>
      <input
        type="text"
        onChange={(event) => onChange("age", event)}
        onClick={removeR}
        value={userage}
        readOnly={changeR}
      />
      <h4>
        이름 {username} 나이 {userage}
      </h4>
    </div>
  );
}

export default ClickToEdit;
