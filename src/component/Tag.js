import { useState } from "react";
import "../Style/first.css";

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
    <div className="area">
      <div className="tagBox">
        <input
          type="text"
          value={tagname}
          onChange={onChange}
          onKeyDown={putTag}
          className="tagInput"
          placeholder="Press enter to add tags"
        />
        <ul className="tagUl">
          {tagList.map((item, index) => (
            <li key={index} className="tagLi">
              {item} <button onClick={() => deleteTag(item)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tag;
