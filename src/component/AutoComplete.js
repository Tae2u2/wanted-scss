import style from "./style.module.css";

function AutoComplete() {
  return (
    <div className={style.area}>
      <input type="text" list="auto-options" />
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
