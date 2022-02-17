import "../Style/first.css";

function AutoComplete() {
  return (
    <div className="area">
      <input type="text" list="auto-options" className="auto-deco" />
      <datalist id="auto-options">
        <option value="antique" />
        <option value="vintage" />
        <option value="중고A급" />
        <option value="rustic" />
        <option value="refurbished" />
      </datalist>
    </div>
  );
}

export default AutoComplete;
