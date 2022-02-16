import { useState } from "react";
import style from "./style.module.css";

function Tag() {
  const [tagname, setTagname] = useState("");
  const [tagList, setTagList] = useState([]);

  const onChange = (event) => setTagname(event.target.value);
  const putTag = (e) => {
    if (e.key === "Enter") {
      if (tagname === "") {
        return;
      }
      setTagList((current) => [tagname, ...current]);
      setTagname("");
    }
  };
  const deleteTag = (removedTag) => {
    const newTags = tagList.filter((tags) => tags !== removedTag);
    setTagList(newTags);
  };

  return (
    <div className={style.area}>
      <div className={style.tagBox}>
        <input
          type="text"
          value={tagname}
          onChange={onChange}
          onKeyDown={putTag}
          className={style.tagInput}
          placeholder="Here!"
        />
        <ul className={style.tagUl}>
          {tagList.map((item, index) => (
            <li key={index} className={style.tagLi}>
              #{item} <button onClick={() => deleteTag(item)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tag;
