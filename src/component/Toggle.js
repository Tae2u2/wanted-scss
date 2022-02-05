import "./Toggle.css";

function Toggle() {
  const moveToggle = () => {
    const circle = document.querySelector(".inner-circle");
    const vertical = document.querySelector(".verticalbox");
    if (circle.classList.contains("active")) {
      circle.classList.remove("active");
      vertical.classList.remove("moving");
    } else {
      circle.classList.add("active");
      vertical.classList.add("moving");
    }
  };
  return (
    <div>
      <button onClick={moveToggle}>
        <div className="outbox">
          <div className="verticalbox"></div>
        </div>
        <div className="inner-circle"></div>
      </button>
    </div>
  );
}

export default Toggle;
