import { useState } from "react";
import "../Style/first.css";

function Tab() {
  const [stayNum, setStayNum] = useState(1);
  const clickHere = (indexNum) => setStayNum(indexNum);

  return (
    <div className="area">
      <nav>
        <ul className="tabUl">
          <li
            onClick={() => clickHere(1)}
            className={stayNum === 1 ? "tabColor active" : "tabColor"}
          >
            Tab1
          </li>
          <li
            onClick={() => clickHere(2)}
            className={stayNum === 2 ? "tabColor active" : "tabColor"}
          >
            Tab2
          </li>
          <li
            onClick={() => clickHere(3)}
            className={stayNum === 3 ? "tabColor active" : "tabColor"}
          >
            Tab3
          </li>
        </ul>
      </nav>
      <div>
        {stayNum === 1 && <section>Tab1눌렀음</section>}
        {stayNum === 2 && <section>Tab2눌렀음</section>}
        {stayNum === 3 && <section>Tab3눌렀음</section>}
      </div>
    </div>
  );
}

export default Tab;
